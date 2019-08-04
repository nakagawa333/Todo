from flask import Flask,render_template,request,redirect,url_for,jsonify
from flask_sqlalchemy import SQLAlchemy
from TodoList import app,db,bcrypt
from TodoList.model import Todo
from sqlalchemy import case 
from sqlalchemy import asc

from TodoList.forms import PostForm
import calendar

import time
import json



@app.route("/")
@app.route("/home",methods=["GET"])
def home():
  todos = Todo.query.all()
  total = Todo.query.count()
  return render_template("index.html",todos=todos,total=total)


@app.route("/sort",methods=["POST"])
def sort():
  todos = db.session.query(Todo).\
      order_by(asc(Todo.section)).\
      all()
  total = Todo.query.count()
  return render_template("index.html",todos=todos,total=total)

@app.route("/add",methods=["POST"])
def add():
  title = request.form["title"]
  content = request.form["content"]
  section = request.form["section"]

  total = title + content + section


  newTodos = Todo(title = title,content = content,section=section,complete=False)
  db.session.add(newTodos)
  db.session.commit()

  todos = Todo.query.all()

  return total



@app.route("/add1",methods=["GET","POST"])
def add1():
  totals = Todo.query.all()
  titles =  Todo.query.filter(Todo.title == "Python").all()


  total = Todo.query.count()

  a = str(total)
  # a = []
  
  # for total in totals:
  #   a.append(total)

  return a

@app.route("/counttotal",methods=["POST"])
def counttotal():
  total = Todo.query.count()
  print(total)
  return total


@app.route("/update/<int:id>",methods=["GET","POST"])
def update(id):
  form = PostForm()
  todo = Todo.query.get_or_404(id)
  if request.method == "POST":
    todo.title = form.title.data
    todo.content = form.content.data
    db.session.commit()
    return redirect(url_for("home"))
  
  return render_template('update.html', title='Update Post',form=form, legend='Update Post')
    
@app.route("/delete/<int:id>")
def deleteTodo(id):
  todo = Todo.query.filter_by(id=id).first()
  db.session.delete(todo)
  db.session.commit()
  time.sleep(1)
  return redirect(url_for('home'))

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
