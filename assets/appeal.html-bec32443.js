import{_ as t,o,c as u,e as q}from"./app-4ea165c6.js";const d={},e=q('<h1 id="稿件投诉" tabindex="-1"><a class="header-anchor" href="#稿件投诉" aria-hidden="true">#</a> 稿件投诉</h1><h2 id="附件上传" tabindex="-1"><a class="header-anchor" href="#附件上传" aria-hidden="true">#</a> 附件上传</h2><blockquote><p>附件上传与视频封面上传共用一个api。</p></blockquote><h2 id="获取投诉类型" tabindex="-1"><a class="header-anchor" href="#获取投诉类型" aria-hidden="true">#</a> 获取投诉类型</h2><blockquote><p>https://api.bilibili.com/x/web-interface/archive/appeal/tags</p></blockquote><p><em>请求类型：GET</em></p><p><strong>json回复：</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td></td><td>成功为0</td></tr><tr><td>message</td><td>str</td><td></td><td>成功为0</td></tr><tr><td>ttl</td><td>num</td><td>1</td><td></td></tr><tr><td>data</td><td>List&lt;object&gt;</td><td></td><td></td></tr></tbody></table><p><code>data</code>数组：</p><table><thead><tr><th>项</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>0</td><td>obj</td><td>类型条目 1</td><td></td></tr><tr><td>n</td><td>obj</td><td>类型条目 (n+1)</td><td>按照指定的顺序排列</td></tr><tr><td>……</td><td>obj</td><td>……</td><td>……</td></tr></tbody></table><p><code>data</code>数组中的对象</p><table><thead><tr><th>项</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>tid</td><td>num</td><td>类型tid</td><td></td></tr><tr><td>business</td><td>num</td><td></td><td>意义不明</td></tr><tr><td>weight</td><td>num</td><td>权重</td><td></td></tr><tr><td>round</td><td>num</td><td></td><td>意义不明</td></tr><tr><td>state</td><td>num</td><td></td><td>意义不明</td></tr><tr><td>name</td><td>str</td><td>类型名称</td><td></td></tr><tr><td>remark</td><td>str</td><td>类型备注</td><td></td></tr><tr><td>ctime</td><td>str</td><td></td><td>意义不明</td></tr><tr><td>mtime</td><td>str</td><td></td><td>意义不明</td></tr><tr><td>controls</td><td>拥有时：object<br>没有时：null</td><td>详细信息填写提示</td><td></td></tr></tbody></table><p><code>data</code>数组中的对象中的<code>controls</code>对象：</p><table><thead><tr><th>项</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>tid</td><td>num</td><td>同上</td><td></td></tr><tr><td>bid</td><td>num</td><td></td><td>意义不明</td></tr><tr><td>name</td><td>str</td><td>提示名称</td><td></td></tr><tr><td>title</td><td>str</td><td>提示标题</td><td></td></tr><tr><td>component</td><td>str</td><td>需要填入的类型</td><td></td></tr><tr><td>placeholder</td><td>str</td><td>文本框占位符</td><td></td></tr><tr><td>required</td><td>num</td><td>是否为必填</td><td></td></tr></tbody></table><p><strong>示例：</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">--location</span> <span class="token parameter variable">--request</span> GET <span class="token string">&#39;https://api.bilibili.com/x/web-interface/archive/appeal/tags&#39;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><details><summary>查看响应示例</summary> ```json { &quot;code&quot;: 0, &quot;message&quot;: &quot;0&quot;, &quot;ttl&quot;: 1, &quot;data&quot;: [ { &quot;tid&quot;: 1, &quot;business&quot;: 1, &quot;weight&quot;: 1, &quot;round&quot;: 2, &quot;state&quot;: 1, &quot;name&quot;: &quot;有其他问题&quot;, &quot;remark&quot;: &quot;为帮助审核人员更快处理，请补充问题类型和出现位置等详细信息&quot;, &quot;ctime&quot;: &quot;2018-08-13T15:41:20+08:00&quot;, &quot;mtime&quot;: &quot;2018-08-13T15:41:20+08:00&quot;, &quot;controls&quot;: null }, { &quot;tid&quot;: 9, &quot;business&quot;: 1, &quot;weight&quot;: 30, &quot;round&quot;: 2, &quot;state&quot;: 1, &quot;name&quot;: &quot;引战&quot;, &quot;remark&quot;: &quot;为帮助审核人员更快处理, 请补充引战的话题和出现位置&quot;, &quot;ctime&quot;: &quot;2018-08-13T15:41:20+08:00&quot;, &quot;mtime&quot;: &quot;2018-08-13T15:41:20+08:00&quot;, &quot;controls&quot;: null }, { &quot;tid&quot;: 10, &quot;business&quot;: 1, &quot;weight&quot;: 20, &quot;round&quot;: 2, &quot;state&quot;: 1, &quot;name&quot;: &quot;不能参加充电&quot;, &quot;remark&quot;: &quot;为帮助审核人员更快处理, 请补充问题类型和出现位置等详细信息&quot;, &quot;ctime&quot;: &quot;2018-08-13T15:41:20+08:00&quot;, &quot;mtime&quot;: &quot;2018-08-23T11:35:28+08:00&quot;, &quot;controls&quot;: null }, { &quot;tid&quot;: 52, &quot;business&quot;: 1, &quot;weight&quot;: 35, &quot;round&quot;: 2, &quot;state&quot;: 1, &quot;name&quot;: &quot;转载/自制类型错误&quot;, &quot;remark&quot;: &quot;为帮助审核人员更快处理, 请补充原创作品出处&quot;, &quot;ctime&quot;: &quot;2018-08-13T15:41:20+08:00&quot;, &quot;mtime&quot;: &quot;2018-08-13T15:41:20+08:00&quot;, &quot;controls&quot;: [ { &quot;tid&quot;: 52, &quot;bid&quot;: 1, &quot;name&quot;: &quot;出处&quot;, &quot;title&quot;: &quot;原创视频出处&quot;, &quot;component&quot;: &quot;link&quot;, &quot;placeholder&quot;: &quot;请填写链接&quot;, &quot;required&quot;: 1 } ] }, { &quot;tid&quot;: 2, &quot;business&quot;: 1, &quot;weight&quot;: 100, &quot;round&quot;: 1, &quot;state&quot;: 1, &quot;name&quot;: &quot;违法违禁&quot;, &quot;remark&quot;: &quot;为帮助审核人员更快处理，补充违规内容出现位置&quot;, &quot;ctime&quot;: &quot;2018-08-13T15:41:20+08:00&quot;, &quot;mtime&quot;: &quot;2018-08-13T15:41:20+08:00&quot;, &quot;controls&quot;: null }, { &quot;tid&quot;: 3, &quot;business&quot;: 1, &quot;weight&quot;: 90, &quot;round&quot;: 1, &quot;state&quot;: 1, &quot;name&quot;: &quot;色情&quot;, &quot;remark&quot;: &quot;为帮助审核人员更快处理，补充违规内容出现位置&quot;, &quot;ctime&quot;: &quot;2018-08-13T15:41:20+08:00&quot;, &quot;mtime&quot;: &quot;2018-08-13T15:41:20+08:00&quot;, &quot;controls&quot;: null }, { &quot;tid&quot;: 4, &quot;business&quot;: 1, &quot;weight&quot;: 80, &quot;round&quot;: 1, &quot;state&quot;: 1, &quot;name&quot;: &quot;低俗&quot;, &quot;remark&quot;: &quot;为帮助审核人员更快处理，补充违规内容出现位置&quot;, &quot;ctime&quot;: &quot;2018-08-13T15:41:20+08:00&quot;, &quot;mtime&quot;: &quot;2018-08-13T15:41:20+08:00&quot;, &quot;controls&quot;: null }, { &quot;tid&quot;: 5, &quot;business&quot;: 1, &quot;weight&quot;: 70, &quot;round&quot;: 1, &quot;state&quot;: 1, &quot;name&quot;: &quot;赌博诈骗&quot;, &quot;remark&quot;: &quot;为帮助审核人员更快处理，补充违规内容出现位置&quot;, &quot;ctime&quot;: &quot;2018-08-13T15:41:20+08:00&quot;, &quot;mtime&quot;: &quot;2018-08-13T15:41:20+08:00&quot;, &quot;controls&quot;: null }, { &quot;tid&quot;: 6, &quot;business&quot;: 1, &quot;weight&quot;: 60, &quot;round&quot;: 1, &quot;state&quot;: 1, &quot;name&quot;: &quot;血腥暴力&quot;, &quot;remark&quot;: &quot;为帮助审核人员更快处理，补充违规内容出现位置&quot;, &quot;ctime&quot;: &quot;2018-08-13T15:41:20+08:00&quot;, &quot;mtime&quot;: &quot;2018-08-13T15:41:20+08:00&quot;, &quot;controls&quot;: null }, { &quot;tid&quot;: 7, &quot;business&quot;: 1, &quot;weight&quot;: 50, &quot;round&quot;: 1, &quot;state&quot;: 1, &quot;name&quot;: &quot;人身攻击&quot;, &quot;remark&quot;: &quot;为帮助审核人员更快处理，补充违规内容出现位置&quot;, &quot;ctime&quot;: &quot;2018-08-13T15:41:20+08:00&quot;, &quot;mtime&quot;: &quot;2018-08-13T15:41:20+08:00&quot;, &quot;controls&quot;: null }, { &quot;tid&quot;: 8, &quot;business&quot;: 1, &quot;weight&quot;: 40, &quot;round&quot;: 1, &quot;state&quot;: 1, &quot;name&quot;: &quot;与站内其他视频撞车&quot;, &quot;remark&quot;: &quot;为帮助审核人员更快处理, 请描述撞车信息&quot;, &quot;ctime&quot;: &quot;2018-08-13T15:41:20+08:00&quot;, &quot;mtime&quot;: &quot;2018-08-23T00:30:04+08:00&quot;, &quot;controls&quot;: [ { &quot;tid&quot;: 8, &quot;bid&quot;: 1, &quot;name&quot;: &quot;撞车对象&quot;, &quot;title&quot;: &quot;撞车对象&quot;, &quot;component&quot;: &quot;input&quot;, &quot;placeholder&quot;: &quot;BVID&quot;, &quot;required&quot;: 1 } ] }, { &quot;tid&quot;: 10000, &quot;business&quot;: 1, &quot;weight&quot;: 10, &quot;round&quot;: 1, &quot;state&quot;: 1, &quot;name&quot;: &quot;青少年不良信息&quot;, &quot;remark&quot;: &quot;为帮助审核人员更快处理, 请补充违规内容出现位置&quot;, &quot;ctime&quot;: &quot;2018-08-13T15:41:20+08:00&quot;, &quot;mtime&quot;: &quot;2018-08-13T15:41:20+08:00&quot;, &quot;controls&quot;: null }, { &quot;tid&quot;: 10013, &quot;business&quot;: 1, &quot;weight&quot;: 37, &quot;round&quot;: 1, &quot;state&quot;: 1, &quot;name&quot;: &quot;不良封面/标题&quot;, &quot;remark&quot;: &quot;为帮助审核人员更快处理, 请描述详细信息&quot;, &quot;ctime&quot;: &quot;2019-04-17T19:18:09+08:00&quot;, &quot;mtime&quot;: &quot;2019-04-17T20:42:25+08:00&quot;, &quot;controls&quot;: null } ] } ``` </details><h2 id="投诉稿件" tabindex="-1"><a class="header-anchor" href="#投诉稿件" aria-hidden="true">#</a> 投诉稿件</h2><blockquote><p>https://api.bilibili.com/x/web-interface/archive/appeal</p></blockquote><p><em>请求方式：POST</em></p><p>认证方式：Cookie（SESSDATA)</p><p><strong>正文参数：</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>csrf</td><td>str</td><td>csrf token(位于cookie)</td><td>必要</td><td>在url params中</td></tr><tr><td>jsonp</td><td>str</td><td>jsonp</td><td>必要?</td><td>意义不明，位于url params</td></tr><tr><td>aid</td><td>num</td><td>稿件aid</td><td>必要</td><td>位于request body</td></tr><tr><td>tid</td><td>num</td><td>投诉理由tid</td><td>必要</td><td>位于request body</td></tr><tr><td>desc</td><td>str</td><td>投诉理由详细描述</td><td>必要</td><td>位于request body</td></tr><tr><td>attach</td><td>str</td><td>附件（多个附件用逗号隔开</td><td>非必要</td><td>位于request body</td></tr></tbody></table><p><strong>json回复：</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回码</td><td>成功为0</td></tr><tr><td>message</td><td>str</td><td></td><td>成功为0</td></tr><tr><td>ttl</td><td></td><td>1</td><td></td></tr></tbody></table><p>**示例：举报av号为61080066的视频，理由为人身攻击，描述为“xxxxx”，并附带了一个图片附件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">--location</span> <span class="token parameter variable">--request</span> POST <span class="token string">&#39;https://api.bilibili.com/x/web-interface/archive/appeal?jsonp=jsonp&amp;csrf=xxxx&#39;</span> <span class="token punctuation">\\</span>\n<span class="token parameter variable">--form</span> <span class="token string">&#39;aid=&quot;61080066&quot;&#39;</span> <span class="token punctuation">\\</span>\n<span class="token parameter variable">--form</span> <span class="token string">&#39;tid=&quot;7&quot;&#39;</span> <span class="token punctuation">\\</span>\n<span class="token parameter variable">--form</span> <span class="token string">&#39;desc=&quot;xxxxx&quot;&#39;</span> <span class="token punctuation">\\</span>\n<span class="token parameter variable">--form</span> <span class="token string">&#39;attach=&quot;https://archive.biliimg.com/bfs/archive/xxxxx.png&quot;&#39;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例</summary> ```json { &quot;code&quot;:0, &quot;message&quot;:&quot;0&quot;, &quot;ttl&quot;:1 } ``` </details>',28),a=[e];function s(r,n){return o(),u("div",null,a)}const l=t(d,[["render",s],["__file","appeal.html.vue"]]);export{l as default};
