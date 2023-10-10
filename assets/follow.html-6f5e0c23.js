import{_ as t,o as s,c as n,e as a}from"./app-4ea165c6.js";const e={},d=a(`<h1 id="追番相关" tabindex="-1"><a class="header-anchor" href="#追番相关" aria-hidden="true">#</a> 追番相关</h1><h2 id="追番" tabindex="-1"><a class="header-anchor" href="#追番" aria-hidden="true">#</a> 追番</h2><blockquote><p>https://api.bilibili.com/pgc/web/follow/add</p></blockquote><p><em>请求方式：POST</em></p><p>鉴权方式：Cookie（SESSDATA）</p><p><strong>url参数：</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>season_id</td><td>str</td><td>剧集ssid</td><td>必要</td><td></td></tr><tr><td>csrf</td><td>str</td><td>csrf token(位于cookies中的bili_jct)</td><td>必要</td><td></td></tr></tbody></table><p><strong>json回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功<br>-111：csrf校验失败</td></tr><tr><td>message</td><td>str</td><td>信息</td><td>成功时：success</td></tr><tr><td>result</td><td>obj</td><td>见下表</td><td></td></tr></tbody></table><p>根对象中的<code>result</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>fmid</td><td>num</td><td>0</td><td></td></tr><tr><td>relation</td><td>bool</td><td>false</td><td></td></tr><tr><td>status</td><td>num</td><td>2</td><td></td></tr><tr><td>toast</td><td>str</td><td>自己追的番就要好好看完哟^o^</td><td></td></tr></tbody></table><p><strong>示例：</strong></p><p>追番<code>ssid=41410</code>的番剧</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-G</span> <span class="token string">&#39;https://api.bilibili.com/pgc/web/follow/add&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;season_id=41410&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;csrf=xxx&#39;</span> <span class="token punctuation">\\</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;success&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;result&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;fmid&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;relation&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token property">&quot;toast&quot;</span><span class="token operator">:</span> <span class="token string">&quot;自己追的番就要好好看完哟^o^&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="取消追番" tabindex="-1"><a class="header-anchor" href="#取消追番" aria-hidden="true">#</a> 取消追番</h2><blockquote><p>https://api.bilibili.com/pgc/web/follow/del</p></blockquote><p><em>请求方式：POST</em></p><p>鉴权方式：Cookie（SESSDATA）</p><p><strong>url参数：</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>season_id</td><td>str</td><td>剧集ssid</td><td>必要</td><td></td></tr><tr><td>csrf</td><td>str</td><td>csrf token(位于cookies中的bili_jct)</td><td>必要</td><td></td></tr></tbody></table><p><strong>json回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功<br>-111：csrf校验失败</td></tr><tr><td>message</td><td>str</td><td>信息</td><td>成功时：success</td></tr><tr><td>result</td><td>obj</td><td>见下表</td><td></td></tr></tbody></table><p>根对象中的<code>result</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>fmid</td><td>num</td><td>0</td><td></td></tr><tr><td>relation</td><td>bool</td><td>true</td><td></td></tr><tr><td>status</td><td>num</td><td>0</td><td></td></tr><tr><td>toast</td><td>str</td><td>已取消追番</td><td></td></tr></tbody></table><p><strong>示例：</strong></p><p>取消<code>ssid=41410</code>的追番</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-G</span> <span class="token string">&#39;https://api.bilibili.com/pgc/web/follow/del&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;season_id=41410&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;csrf=xxx&#39;</span> <span class="token punctuation">\\</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;success&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;result&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;fmid&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;relation&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;toast&quot;</span><span class="token operator">:</span> <span class="token string">&quot;已取消追番&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,31),o=[d];function p(r,l){return s(),n("div",null,o)}const i=t(e,[["render",p],["__file","follow.html.vue"]]);export{i as default};
