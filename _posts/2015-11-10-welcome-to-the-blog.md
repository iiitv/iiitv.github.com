---
layout: post
author: aviaryan
title: Welcome to IIITV Blog
tags: blog announcement
---

Hello everyone.

This is the IIITV community blog. If you ever want to share your thoughts, musings or observations with the world you are free to use this platform. This blog can also be used to serve as a news portal for the ongoing events of our college.

The blog was designed by [Mofid Ansari](http://facebook.com/ansarimofid) and the functionality was developed by me, [Avi Aryan](http://aviaryan.in). The blog resides on the [github community](https://github.com/iiitv) of our college. Interested may view the source from its [repository](https://github.com/iiitv/iiitv.github.com).

To make a post, you first need to have an account on [github.com](http://github.com). Once your account is created, go ahead and fork the [blog's repository](https://github.com/iiitv/iiitv.github.com). After the blog is forked to your account, create an entry in `_data/author.yml`. It should go something like - 

{% highlight yaml %}
GITHUB_USER_NAME:
    name: FULLNAME
    twitter: TWITTER_HANDLE
    tagline: SHORT_AUTHORS_TAGLINE
    img: DIRECT_LINK_TO_YOUR_IMAGE
    link: LINK_TO_YOUR_WEBPAGE
{% endhighlight %}

See [here](https://github.com/iiitv/iiitv.github.com/blob/master/_data/author.yml) for a sample. 

Once that is done, create a file in *_posts* directory of the format `YYYY-MM-DD-PAGE-LINK.md`. Each of these 'md' (markdown) files contains a single post. After creating the file, open it and start writing your post.

{% highlight markdown %}
---
layout: post
title: PAGE TITLE
tags: SPACE SEPARATED TAGS
author: GITHUB_USER_NAME
---

Start writing your post from here...
This is some **bold text** and *italics*.
{% endhighlight %}

After writing your post ([example](https://raw.githubusercontent.com/iiitv/iiitv.github.com/master/_posts/2015-11-10-welcome-to-the-blog.md)), send us a pull request. The moderators will have a look at your post and merge it, thus your post will be live on the blog.

I know this is not the perfect guide, so feel free to contact me or [open an issue](https://github.com/iiitv/iiitv.github.com/issues) in case you need any help. 