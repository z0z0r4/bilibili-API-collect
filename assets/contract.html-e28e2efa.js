import{_ as t,o as s,c as a,e as n}from"./app-4ea165c6.js";const d={},e=n(`<h1 id="加入老粉计划" tabindex="-1"><a class="header-anchor" href="#加入老粉计划" aria-hidden="true">#</a> 加入老粉计划</h1><blockquote><p>https://api.bilibili.com/x/v1/contract/add_contract</p></blockquote><p><em>请求方式：POST</em></p><p>是否需要登录：<code>是</code></p><p>认证方式：Cookie(SESSDATA)</p><p><strong>正文参数 (application/x-www-form-urlencoded)：</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>aid</td><td>str</td><td><code>空串</code></td><td></td><td></td></tr><tr><td>up_mid</td><td>str</td><td>UP主UID</td><td>必要</td><td></td></tr><tr><td>source</td><td>str</td><td><code>4</code></td><td></td><td></td></tr><tr><td>scene</td><td>str</td><td><code>105</code></td><td></td><td></td></tr><tr><td>platform</td><td>str</td><td><code>web</code></td><td></td><td></td></tr><tr><td>mobi_app</td><td>str</td><td><code>pc</code></td><td></td><td></td></tr><tr><td>csrf</td><td>str</td><td>用户csrf</td><td>必要</td><td></td></tr></tbody></table><p><strong>json回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段名</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>响应码</td><td>0：成功<br>158001：<code>不满足条件</code></td></tr><tr><td>message</td><td>str</td><td>0</td><td></td></tr><tr><td>ttl</td><td>num</td><td>1</td><td></td></tr><tr><td>data</td><td>obj</td><td>信息本体</td><td></td></tr></tbody></table><p><code>data</code>对象</p><table><thead><tr><th>字段名</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>allow_message</td><td>bool</td><td><code>true</code></td><td></td></tr><tr><td>input_text</td><td>str</td><td><code>UP主加油！看好你噢</code></td><td></td></tr><tr><td>input_title</td><td>str</td><td><code>感谢你对UP主的特别支持，“老粉”可期！私信留言鼓励下TA吧 </code></td><td></td></tr></tbody></table><p><strong>示例：</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">--location</span> <span class="token parameter variable">--request</span> POST <span class="token string">&#39;https://api.bilibili.com/x/v1/contract/add_contract&#39;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">--header</span> <span class="token string">&#39;Cookie: SESSDATA=xxx&#39;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">--header</span> <span class="token string">&#39;Content-Type: application/x-www-form-urlencoded&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;up_mid=2&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;csrf=xxx&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>点击查看</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;ttl&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;allow_message&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;input_text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;UP主加油！看好你噢&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;input_title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;感谢你对UP主的特别支持，“老粉”可期！私信留言鼓励下TA吧 &quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h1 id="老粉计划发送留言" tabindex="-1"><a class="header-anchor" href="#老粉计划发送留言" aria-hidden="true">#</a> 老粉计划发送留言</h1><blockquote><p>https://api.bilibili.com/x/v1/contract/add_message</p></blockquote><p><em>请求方式：POST</em></p><p>认证方式：Cookie (SESSDATA)</p><p><strong>正文参数 (application/x-www-form-urlencoded)：</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>aid</td><td>str</td><td><code>空串</code></td><td></td><td></td></tr><tr><td>up_mid</td><td>str</td><td>UP主UID</td><td>必要</td><td></td></tr><tr><td>source</td><td>str</td><td><code>4</code></td><td></td><td></td></tr><tr><td>scene</td><td>str</td><td><code>105</code></td><td></td><td></td></tr><tr><td>content</td><td>str</td><td>留言内容</td><td>必要</td><td></td></tr><tr><td>csrf</td><td>str</td><td>用户csrf</td><td>必要</td><td></td></tr></tbody></table><p><strong>json回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段名</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>响应码</td><td>0：成功<br>158005：您跟up主还不是契约关系</td></tr><tr><td>message</td><td>str</td><td>0</td><td></td></tr><tr><td>ttl</td><td>num</td><td>1</td><td></td></tr><tr><td>data</td><td>obj</td><td>信息本体</td><td></td></tr></tbody></table><p><code>data</code>对象</p><table><thead><tr><th>字段名</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>success_toast</td><td>str</td><td><code>提交成功，UP主已收到留言~</code></td><td></td></tr></tbody></table><p><strong>示例：</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">--location</span> <span class="token parameter variable">--request</span> POST <span class="token string">&#39;https://api.bilibili.com/x/v1/contract/add_message&#39;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">--header</span> <span class="token string">&#39;Cookie: SESSDATA=xxx&#39;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">--header</span> <span class="token string">&#39;Content-Type: application/x-www-form-urlencoded&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;up_mid=2&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;content=..&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;csrf=xxx&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>点击查看</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;ttl&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;success_toast&quot;</span><span class="token operator">:</span> <span class="token string">&quot;提交成功，UP主已收到留言~&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,29),o=[e];function p(r,c){return s(),a("div",null,o)}const i=t(d,[["render",p],["__file","contract.html.vue"]]);export{i as default};
