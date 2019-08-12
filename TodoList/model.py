from TodoList import db

from TodoList import ma

class Todo(db.Model):
  id = db.Column(db.Integer,primary_key=True)
  title = db.Column(db.String(200))
  content = db.Column(db.Text)
  section  = db.Column(db.String(200))
  complete = db.Column(db.Boolean)

  def __repr__(self):
    return "Todo(title={0},content={1},section={2})".format(self.title,self.content,self.section)

 # class UserShema(ma.Schema):
 # 	class Meta:
 # 		fields = ()

class UserSchema(ma.Schema):
	class Meta:
		model = Todo

user_schema = UserSchema()
user_schema = UserSchema(many=True)