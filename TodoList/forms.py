from flask_wtf import FlaskForm
from wtforms import StringField,SubmitField,TextAreaField

from wtforms.validators import DataRequired,ValidationError

class PostForm(FlaskForm):
  title = StringField('タイトル',validators=[DataRequired()])
  content = TextAreaField('内容',validators=[DataRequired()])
  submit = SubmitField('送信')