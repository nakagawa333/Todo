# coding: utf-8
from flask import Flask,render_template,request,redirect,url_for,jsonify
from flask_sqlalchemy import SQLAlchemy
from TodoList import app,db,bcrypt
from TodoList.model import Todo,TodoSchema
from sqlalchemy import case 
from sqlalchemy import asc
from sqlalchemy import or_
from TodoList.forms import PostForm

import time
import json

@app.route("/")
@app.route("/home",methods=["GET"])
def home():
  form = PostForm()
  todos = Todo.query.all()
  total = Todo.query.count()
  return render_template("index.html",todos=todos,total=total,form=form)


@app.route("/sort",methods=["POST"])
def sort():
  form = PostForm()
  todos = db.session.query(Todo).\
      order_by(asc(Todo.section)).\
      all()

  todo_schema = TodoSchema(many=True)
  result = todo_schema.dump(todos)
  return jsonify({"todo":result})
  
@app.route("/search",methods=["POST"])
def search():
  req = request.form["req"]
  print(req)
  searches = db.session.query(Todo).\
                                                   filter(or_(\
                                                   Todo.title.like("%" + req + "%"),\
                                                   Todo.content.like("%" + req + "%"),\
                                                   )).all()

  todo_schema = TodoSchema(many=True)
  result = todo_schema.dump(searches)
  return jsonify({"searches":result})

@app.route("/add",methods=["POST"])
def add():
  title = request.form["title"]
  content = request.form["content"]
  section = request.form["section"]

  newTodos = Todo(title = title,content = content,section=section,complete=False)
  db.session.add(newTodos)
  db.session.commit()

  todos = Todo.query.all()

  return jsonify({"title":title,"content":content,"section":section})

@app.route("/total",methods=["POST"])
def total():
  totals = Todo.query.all()
  todo_schema = TodoSchema(many=True)
  result = todo_schema.dump(totals)
  return jsonify({"todo":result})
  

@app.route("/counttotal",methods=["POST"])
def counttotal():
  total = Todo.query.count()
  Stringtotal = str(total)

  return Stringtotal



@app.route("/update",methods=["GET","POST"])
def update(id):
  form = PostForm()
  # todo = Todo.query.get_or_404(id)
  if request.method == "POST":
    todo = Todo.query.filter_by(id=request.form["id"]).first()
    todo.title = form.title.data
    todo.content = form.content.data
    db.session.commit()

    return jsonify({"title":todo.title,"content":todo.content})
  
  return render_template('update.html', title='Update Post',form=form, legend='Update Post')
    
@app.route("/delete",methods=["POST"])
def deleteTodo():
  todo_id = Todo.query.filter_by(id=request.form["id"]).first()
  todo = Todo.query.filter_by(id=request.form["id"]).first()
  db.session.delete(todo)
  db.session.commit()
  time.sleep(1)

  ##データの数のカウント
  total = Todo.query.count()
  Stringtotal = str(total)

  return Stringtotal


@app.route("/detail/<int:id>")
def detailTodo(id):
  todo = Todo.query.filter_by(id=id).first()

  return render_template("detail.html",todo=todo)


@app.route("/deleteall",methods=["POST"])
def deleteall():
  Todo.query.delete()
  db.session.commit()
  total = Todo.query.count()
  Stringtotal = str(total)

  return Stringtotal
