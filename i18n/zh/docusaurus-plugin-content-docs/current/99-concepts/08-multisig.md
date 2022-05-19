# 多重签名

**多重签名**（multisignature），简称**多签**，也常写为 multisig 或 multi-signature。
如果一个交易需要两个或者更多签名才能生效，那么这种情况就叫多重签名。

## 举例

假设公司有个银行账户，密码的前三位由 A 负责保管，密码的后三位由 B 负责保管，转账时必须 A 和 B 同时输入密码才可以转账成功，这便是一个典型的多签案例。

多签全称多重签名技术，2012年第一次被用于比特币地址，之后则催生了多重签名钱包。

## 多签交易

一般转账仅需要单签即可完成，也就是说一个私钥即可签署交易，完成转账。
但是，多签交易需要多个密钥持有者的授权才能转移数字货币，这样钱包中的资产更加安全，同时可以防止出现内部偷盗的情况。

多重签名交易有时候也被称为 `M-of-N 交易`。
**M** 指的是交易生效所需要的签名数量，**N** 指的是和本次交易相关的各方的总数量。

具体来说，就是假设 N 个人分别持有 N 个私钥，只要其中 M 个人同意签名就可以动用某个**多签账户**的资金。

例如：

* 1-2：两人只要有一人同意即可使用资金。
* 2-2：两人必须都同意才可使用资金。
* 2-3：3个人中必须要两个人同意才可使用资金。
* 4-7：7个人中必须要4个人同意才可使用资金。
* ……

N 的取值不局限于以上案例，M 的值只要小于等于 N 的正整数即可，不同的 M 和 N 取值可以适合不同的应用场景。

## 多重签名地址

多重签名地址是一种特殊的钱包地址，想要转出地址中的钱就需要执行多重签名交易。
利用多重签名，可以使得私钥丢失的风险被分散到 N 个人手中，并且避免了少数人窃取资金的问题。

简单来讲，一个 `M-of-N` 的地址需要收集 N 方的地址信息来生成。
代币一旦转入这个地址就需要 M 方共同签名交易，才能把币转出。

## 为什么需要多签

由上面的分析可知，使用多签比单签更为安全。

1. 防止私钥丢失。

通常单签账户一旦丢失了私钥，没有任何办法取出对应地址的资金。这样就使得因为丢失私钥而导致资金丢失的风险增加。
多重签名机制可以分散私钥丢失的风险，保证资金安全。

2. 防止黑客攻击。

对于多签账户来说，黑客想要窃取资金，通常需要获取多个多签私钥，相比于获取单签账户的私钥难度更大。

3. 防止内部偷盗。

私钥掌握在个别人手中可能会出现内部偷盗的情况，如果掌握在多个人手中，可以有效降低这种情况的发生。

## 总结

多签技术可以让资金的管理和交易变得更安全，因此大型交易所的钱包一般均采用多签账户。