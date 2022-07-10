'''
Author: Hector Jing
Date: 2022-07-09 13:48:19
LastEditTime: 2022-07-09 13:52:44
Description: 
'''
from alibabacloud_tea_openapi import models
from alibabacloud_ecs20140526.client import Client


config = models.Config(
    # 您的AccessKey ID,
    access_key_id='<access_key_id>',
    # 您的AccessKey Secret,
    access_key_secret='<access_secret>',
    # 地域ID
    region_id='cn-hangzhou',
    # 访问的域名
    endpoint = 'ecs-cn-hangzhou.aliyuncs.com'
)

client = Client(config)