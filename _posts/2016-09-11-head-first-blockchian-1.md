---
title: Head First Blockchina 1
tags:
 - blockchain
 - hyperledger
 - MyBlog
layout: posts
---

# 深入浅出区块链系统：第一章.
`what you should know about blockchain`

考虑的大家现在很多都是碎片化阅读，不知道大家如何，反正如果我是在在只有很短一段时间里，不太容易切换状态静下心来读一篇洋洋洒洒的长文章。因此此系统会保持短小精悍，把整套分成一系列小文章，每个文章有分成若干个段（sections）。既KISS原则，查看[这里](http://cloudsdocker.github.io/2016/09/02/2016-09-02-Design-Principals/)什么是KISS.

目前`区块链（blockchain）`应该是在最近比较火的新技术之一了，这个不光在银行金融行业，也在其他诸多行业逐渐成为热点。区块链基于被认为是`继互联网之后最重要的技术发明之一`。看到过很多关于区块链的文章，要么是太过于学术，要么又局限于某个行业领域。对于一般人来说不太容易去理解其所以然。因此，笔者提笔自己写一个关于区块链的系列文章，以方便大家。

## 比特币
说到区块链就不得不提比特币。在进入讨论blockchain之前，先上张图片。
![](https://qph.ec.quoracdn.net/main-qimg-6290fccef5f018b22672e7d1c9179350-c?convert_to_webp=true)

这个是在说雷曼兄弟公司的破产，背景是发生于2008年金融危机。当时被媒体及世人厌恶的贪婪，低效的传统金融体系垮塌，与此同时，不知道是不是巧合，比特币（bitcoin）诞生了（其实电子货币已经有几十年的历史了）。

![](http://bitcoinspace.net/wp-content/uploads/2016/03/bitcoin.jpg)

比特币，就像是美元，人民币一样是个货币，只是这个是数字化的货币，没有一个具体的国家或者机构管理。既然是货币就要拿来用，要流通。当有任何变动，就会产生所谓的 *money in money out， balance changed*。即这些比特币的变动，最新的余额是多少，等都要记录下来。在现实世界中，这些记录在具体你的每个银行账户中，由一些监管机构监视并确保准确性。

但是比特币是个电子货币，没有一个具体的营业监管机构。怎么破？

这时区块链就被发明出来（大约是在2009年），区块链起源于比特币，就是当比特币从一个人转移到另一个人时，用于记录这些变动。换句话说，区块链（Blockchain） 就是比特币（bitcoin）的不可变动（immutable）的记账系统。

## 记账
有人可能会觉得“记账系统”太过于笼统，不太明白，因此首先这里说一下什么是记账，举个例子，你在淘宝上买东西，整个过程需要有多个记账操作，包括可能需要在购物车里添加一条记录，你买好了需要在商家那里记一笔账，然后支付时需要记下一笔，快递再需要记录一笔。如果你买的不是一般的小东西，比如是一个房子，那样还要在相关管理部门还要记录一笔。
有没有发现这个是非常低效的，需要花费很多的重复资源的过程？换句话说，这些低效都是最终都要转嫁到我们消费者头上。区块链却在设计之初很好的解决上面这些弊端。


## 什么是区块链

区块链是专门针对比特币设计开发的记账系统，用于所有比特币的记账。因为区块链本身良好的设计，区块链被服务于比特币仅仅只是一个用例和开端，其还可以用于很多地方。

### 记住这几个词可以帮助理解什么是区块链
* chain/链。 像下面这个图，数据的组织是由一个一个`大小相同`的块(block)组成一个链条(chain)，就像是DNA里每个基因有机的组织在一起。   ![](https://image.spreadshirtmedia.com/image-server/v1/designs/12710632,width=190,height=190,version=1395590038.png/bitcoin-lego-block-chain-t-shirt_design.png).

下面使用一个例子来解释一下。当有如下三个操作时就会在区块链中添加三条记录。

![](http://cloudsdocker.github.io/images/BlockChain_1.jpg)
![](http://cloudsdocker.github.io/images/BlockChain_Chain2.png)


* 去中心化，或者说是“分布式” ， 也就是具体的这些记账数据是分布式的散落在各个节点，而且每个节点都存有一份`所有的`交易。这样有个好处，就是每个交易有多份副本，互相之间可以对比查对，那些欺诈，篡改数据就没有可能了。其实，传统金融业有一个问题就是各个金融机构间互相的`不信任`，想像一下在2008年金融危机时，各个金融机构竞相抢购那些credit default derivatives等产品，就是因为大家对对方的不信任所引起的。

* 挖矿。 “矿工”，其实就是链中一个个能够保存对账信息的`节点`的别名. 当有新的对账或者交易时，应该就是把数据写到某个节点，然后再需要加入到区块链中时。但问题是“链”只有一个，节点有很多，到底由哪个节点来完成这个任务呢？解决办法就是“打”，看谁厉害。其实就是许多的矿工节点会互相竞争，使用一些非常耗费计算资源，后台使用复杂的算法，最后使用一种叫做 PoW （Proof Of Work,是一种快速断定工作量的技术，比如你安排工人来给把一车箱子从仓库搬到车间，你并不需要从一开始紧盯着他去搬每一个箱子，只要看到最终的所有的箱子都已经在车间，即可证明他做完了工作，可以给相应的报酬了。这个我们在后续章节详细解释）的机制来决定最终哪个节点获胜，由它有资格来写这个区块，并加入到区块链中，同时这个获胜的节点可以得到相应财务上的奖励，即若干的比特币，这也正是不断激励人们投入更加强大计算能力的机器来挖矿的原因。这个过程被比特币平台很好的控制节奏，也就是大概每10分钟左右产生一个新的“区块”以添加到区块链路中。

可以参考https://blockchain.info/?currency=CNY， 这里是以人民币滚动显示当前所有挖矿的更新，下图是此屏幕截图。
![](http://cloudsdocker.github.io/images/blockchain_info.gif)


## 区块链的应用领域

### 金融业
对于金融业来说，在进行远程转账时一直在使用的所谓“关系银行”，比如你想要通过中国工商银行给朋友在澳洲的汇丰银行的账户转账，这时在中间可能要经过在香港的汇丰以及悉尼的银行等多个第三方机构来中转，不光要多花手续费，真正拿到手时可能已经1周时间过去了。如果使用区块链，转账其实就是添加一个“对账”信息块并加入到区块链中即可，对方银行可以立即在链中发现此交易。这样此过程就流水化（streamline）了，就跟发个电子邮件似的。 相对于之前，区块链会有3个优势，（1）不需要经过第三方 （2）快 （3）省钱

![](http://fintechnews.ch/wp-content/uploads/2016/05/Centralized-vs-Distributed-Ledger-Bitcoin-pressure.png)

### 一般商业公司
设想一下普通办公场景，一般业务处理都会涉及到许多纸制的表格，文件，请多文件的复印件等等。一是方便文件信息的传递，记录，另外一个原因是为了应付内部外部的审计。如果使用区块链，这些问题都得到很好的解决。比如，由于区块链的系统架构，其本身数据就是自动审计的。简言之，在这个领域，区块链有3大优势，（1）数据透明（2）数据安全性验证（3）审计。

### 对于零售行业
比如说你想知道这个食品是不是有机食品，而每个环节的数据都是散落在各个地方，不便于统一追踪。另外，数据的来源又是多种多样，又容易被篡改，比如作为一个钻石加工商，我是无法确定这批钻石是不是血钻。而“区块链”本身的特性保证了可以跟踪产品生命周期的每个阶段详细信息，而且区块链的“只能添加”的属性也确保了数据数据的准确性，不容易被后期篡改。因此区块链也可以用以政府类的投票，这样就更加具有合法性，不可能被人为篡改结果。

### 小结
以上的案例都涉及到一个关键词 “信任”。 你不信任供应链路，你不信任 “相关银行”， 等。但是你可以信任 “区块链”，它是允许多个不同的机构一起协同工作，但是不需要他们之间相互信任。

## FAQ （常问的问题）


### 这些 “区块” 具体是什么样子的？
首先每个区块包含有一个时间戳，包含一个哈希码，指向其前面链接的区块，然后就是对账交易数据本身。每个区块都有一个唯一编号，生成这个编号是需要大量的计算工作及验证。我们在后续章节详细介绍此功能。

### 什么样新的块才能够加入
当需要添加新的块时，需要有所有节点中50%认为正确同意才可以。这样可以保证恶意的数据被加入到链中。

### 每个节点都存一份不也是有额外的成本吗
其实在2010年，1P (Peta byte)数据存储一个月是 $80,000/month,预计在2020年，也就是10年后，同样的1P的数据存储一个月只要 $4/month. 可见，存储本身的成本几乎可以越来越忽略不计了。

### 总之，BlockChain的出现，是由于人们的预期， 技术的进步。

所有上面提到的东西，包括此文章的markdown源代码，mindmap思维导图等等都可以在我的github上找到。此文章是我在`GitBook`上此系统的第一篇，[链接](https://www.gitbook.com/book/cloudsdocker/head-first-blockchain/details)。如果有任何建议或者想法，请联系我。

## 联系我：
* phray.zhang@gmail.com (email/邮件，whatsapp, linkedin)
* helloworld_2000 (wechat/微信)
* [github](https://github.com/CloudsDocker/)
* [简书 jianshu]（http://www.jianshu.com/users/a9e7b971aafc）
* 微信公众号：vibex
