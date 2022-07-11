'''
Author: Hector Jing
Date: 2022-07-10 21:58:18
LastEditTime: 2022-07-10 22:30:02
Description: 
'''
import urllib, urllib2, sys
import ssl


host = 'https://jisutqybmf.market.alicloudapi.com'
path = '/weather/query'
method = 'GET'
appcode = ''
querys = 'city=%E5%AE%89%E9%A1%BA&citycode=citycode&cityid=cityid&ip=ip&location=location'
bodys = {}
url = host + path + '?' + querys

bodys[''] = ""
post_data = bodys['']
request = urllib2.Request(url, post_data)
request.add_header('Authorization', 'APPCODE ' + appcode)
# //根据API的要求，定义相对应的Content-Type
request.add_header('Content-Type', 'application/json; charset=UTF-8')
ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE
response = urllib2.urlopen(request, context=ctx)
content = response.read()
if (content):
    print(content)