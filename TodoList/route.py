from flask import Flask,render_template,request,redirect,url_for
from flask_sqlalchemy import SQLAlchemy
from TodoList import app,db,bcrypt
from TodoList.model import Todo

from TodoList.forms import PostForm

@app.route("/")
@app.route("/home",methods=["GET"])
def home():
  todos = Todo.query.all()
  return render_template("index.html",todos=todos)

@app.route("/add",methods=["POST"])
def add():
  title = request.form.get("title")
  content = request.form.get("content")
  newTodo = Todo(title = title,content = content,complete=False)
  db.session.add(newTodo)
  db.session.commit()
  return redirect(url_for('home'))

@app.route("/update/<int:id>",methods=["GET","POST"])
def update(id):
  form = PostForm()
  todo = Todo.query.get_or_404(id)
  if request.method == "POST":
    todo.title = form.title.data
    todo.content = form.content.data
    db.session.commit()
    return redirect(url_for("home",id=todo.id))
  
  return render_template('update.html', title='Update Post',form=form, legend='Update Post')
    
@app.route("/delete/<int:id>")
def deleteTodo(id):
  todo = Todo.query.filter_by(id=id).first()
  db.session.delete(todo)
  db.session.commit()
  return redirect(url_for('home'))

@app.route("/detail/<int:id>")
def detailTodo(id):
  todo = Todo.query.filter_by(id=id).first()

  return render_template("detail.html",todo=todo)

@app.route("/deleteall",methods=["POST"])
def deleteall():
  Todo.query.delete()
  db.session.commit()
  return redirect(url_for("home"))