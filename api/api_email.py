'''
Author: Hector Jing
Date: 2022-07-09 12:26:33
LastEditTime: 2022-07-10 21:55:06
Description:
'''
import json

from sympy import content
with open("rules.json", "r", encoding="utf8") as f:    
    jsonObj = json.load(f)
    

import smtplib
from email.mime.text import MIMEText
from email.header import Header


# 3rd party SMTP service
email_server = jsonObj["email_server"] 
email_server_port = jsonObj["email_server_port"]
email_user = jsonObj["email_user"]
email_pass = jsonObj["email_pass"]
smtpObj = smtplib.SMTP(email_server, email_server_port)
smtpObj.login(email_user, email_pass)


# send message
sender = jsonObj["sender"]
receivers = jsonObj["receivers"]# bcc
subject = jsonObj["subject"]
content = jsonObj["content"]


message = MIMEText(content, 'plain', 'utf-8')
message['From'] = Header("邮件提醒", 'utf-8')
message['Subject'] = Header(subject, 'utf-8')


try:
    for receiver in receivers:
        print(receiver)
        message['To'] = Header(receiver, 'utf-8')
        smtpObj.sendmail(sender, receiver, message.as_string())
except smtplib.SMTPException as e:
    print("Error:Send Email failed.%e"%e)


