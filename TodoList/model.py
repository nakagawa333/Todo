from TodoList import db

class Todo(db.Model):
  id = db.Column(db.Integer,primary_key=True)
  title = db.Column(db.String(200))
  content = db.Column(db.Text)
  complete = db.Column(db.Boolean)

  def __repr__(self):
    return "Todo(title={0})".format(self.title)