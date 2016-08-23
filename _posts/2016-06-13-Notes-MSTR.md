---
layout: post
title:  "Notes: MSTR and databases"
date:   2016-06-13 09:31:02 -0400
categories: MSTR-public
---

Metadata v.s. Data warehouse
{: style="color:gray; font-size: 140%;"}
Metadata is data about data; 
While the data warehouse is the real source of the facts and dimensions that you will analyze. 

Still don't understand; 
{: style="color:gray; font-size: 140%;"}

1. There are two types of project source, two-tiers (Direct) and three-tiers (Intelligence Server). Two-tiered project sources connect directly to the metadata database, while three-tiered first connect to an Intelligence Server, which in turn connects to the metadata.

Pipeline 
{: style="color:gray; font-size: 140%;"}

从very start开始（就是除了一个microstrategy server和一堆数据之外什么的情况）；
现在我在本机上装了MSTR Developer，Iserver是在我的电脑上运行的。
1. create a database for metadata; （删除project source之后新建，虽然名字被更改，但是内容都自动恢复了。这是因为一个server上只有一个metadata，而metadata没有删除的情况下被自动连接了。我最后解决的方式是，直接把metadata database从它的数据库server上删除。）

2. create the DSN for the metadata;
   (connectivity wizard)

3. create the metadata shell; 
   (configuration wizard)
   when finish, continue to conigure the server; 

4. create project source; 
   (configure with database user/password;
    log in with administrator)

5. create database instance; 

6. create project object; (wait patiently;)

Connect to a MySQL 5.1 Community database instance 
{: style="color:gray; font-size: 140%;"}

In order to connect to a MySQL 5.1 Community database instance from MicroStrategy Analytics Desktop 9.4.1.2, the MySQL ODBC Driver version 5.2.5 (32 bits - Unicode) should be used.


Visit MSTR via web (localhost/iserver on the current computer)
{: style="color:gray; font-size: 140%;"}

http://localhost/MicroStrategy/asp/Admin.aspx


To find which version of windows you are running, enter the following commands in the Command Prompt or Powershell:
{: style="color:gray; font-size: 140%;"}

{% highlight shell %}
>wmic os get caption
>wmic os get osarchitecture
{% endhighlight %}


Use MongoDB on Windows:
{: style="color:gray; font-size: 140%;"}

1. install MongoDB; (use .msi;)
2. set up the MongoDB environment; (sepcify the path for data files;)

The following method is via command line; you can also edit the configuration file for MongoDB;

{% highlight shell %}
>mongod --dbpath [path/to/data_repository]
{% endhighlight %}

3. start the MongoDB;

{% highlight shell %}
>mongod
{% endhighlight %}

The "waiting for connections" message in the console output indicates that the mongod.exe process is running successfully; 

4. connect to MongoDB;

To connect to MongoDB through the mongo.exe shell, open another Command Prompt:

{% highlight shell %}
>mongo
{% endhighlight %}

5. import data;

{% highlight shell %}
> mongoimport --db test --collection restaurants --type json --file ~/downloads/primer-dataset.json
{% endhighlight %}


6. use the sample data;

(The following is under the MongoDB shell;)
Quick reference can be found at https://docs.mongodb.com/manual/reference/mongo-shell/;

{% highlight shell %}
>show dbs;
>use test;
>show collections; 
>quit()
{% endhighlight %}

Basic query

{% highlight shell %}
>db.[colloection_name].find()
{% endhighlight %}

Use mySQL database in MSTR (import mySQL database to MSTR)
{: style="color:gray; font-size: 140%;"}

https://community.microstrategy.com/t5/tkb/articleprintpage/tkb-id/architect/article-id/6327
https://community.microstrategy.com/t5/Web/TN45665-How-to-connect-to-a-MySQL-5-1-Community-database/ta-p/195342

关键是到MicroStrategy的文档查询当前使用的MSTR的版本支持的database driver， 
在下面的这个地址查询：
(https://microstrategyhelp.atlassian.net/wiki/display/README102/MicroStrategy+10.2+Certified+and+Supported+Configurations#MicroStrategy10.2CertifiedandSupportedConfigurations-ApplicationServers)
然后用相应的driver进行连接。之前MongoDB的数据库连不上也是相同的原因， 用了正确Version以后就解决了。
