'''
Author: Hector Jing
Date: 2022-07-09 12:26:33
LastEditTime: 2022-07-13 14:47:13
Description:
'''
import json
import smtplib
from email.mime.text import MIMEText
from email.header import Header


class APIEmail:
    def __init__(self):
        jsonObj = '';
    @property
    def readJson(self):
        with open("rules.json", "r", encoding="utf8") as f:    
            jsonObj = json.load(f)
        return jsonObj;
    @classmethod
    
    # de



# 3rd party SMTP service
email_server = jsonObj["email_server"] 
email_server_port = jsonObj["email_server_port"]
email_user = jsonObj["email_user"]
email_pass = jsonObj["email_pass"]

sender = jsonObj["email_user"]
receivers = jsonObj["receivers"]

message = MIMEText("内容", 'plain', 'utf-8')
message['From'] = Header(sender, 'utf-8')
message['To'] = Header("Hector.Jiang@outlook.com", 'utf-8')
message['Subject'] = Header("标题", 'utf-8')

try:
    smtpObj = smtplib.SMTP()
    smtpObj.connect(email_server, email_server_port)
    smtpObj.login(email_user, email_pass)
    smtpObj.sendmail(sender, receivers, message.as_string())
except smtplib.SMTPException as e:
    print("Error:Send Email failed.%e"%e)


