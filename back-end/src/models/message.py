from flask_sqlalchemy import SQLAlchemy
import datetime

db = SQLAlchemy()


class Message(db.Model):
    __tablename__= 'message'
    Id = db.Column(db.Integer,nullable=False,primary_key)
    userId= db.Column(db.Integer,db.ForeignKey('user.Id'))
    gameId= db.Column(db.Integer,db.ForeignKey('game.Id'))
    content = db.Column(db.String)
    sendedAt = (db.DateTime)
   
    def __init__ (self,userId,gameId,content):
        self.userId= userId
        self.gameId = gameId
        self.content = content
        self.sendedAt = datetime.datetime.utcnow()
       
