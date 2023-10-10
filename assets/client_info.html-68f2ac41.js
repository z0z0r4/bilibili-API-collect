import{_ as t,o as s,c as n,e as a}from"./app-4ea165c6.js";const o={},d=a(`<h1 id="终端信息查询" tabindex="-1"><a class="header-anchor" href="#终端信息查询" aria-hidden="true">#</a> 终端信息查询</h1><h2 id="终端信息查询-1" tabindex="-1"><a class="header-anchor" href="#终端信息查询-1" aria-hidden="true">#</a> 终端信息查询</h2><blockquote><p>https://api.bilibili.com/client_info</p></blockquote><p><em>请求方式：任意</em></p><p><strong>json回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功</td></tr><tr><td>message</td><td>str</td><td>错误信息</td><td>默认为0</td></tr><tr><td>ttl</td><td>num</td><td>1</td><td></td></tr><tr><td>data</td><td>obj</td><td>信息本体</td><td></td></tr></tbody></table><p><code>data</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>country</td><td>str</td><td>国家/地区名</td><td></td></tr><tr><td>ip</td><td>str</td><td>公网IP地址</td><td></td></tr><tr><td>province</td><td>str</td><td>省/州</td><td>非必须存在项</td></tr><tr><td>city</td><td>str</td><td>城市</td><td>非必须存在项</td></tr><tr><td>district</td><td>district</td><td>？</td><td></td></tr><tr><td>isp</td><td>str</td><td>运营商名</td><td></td></tr><tr><td>dns</td><td>str</td><td>dns服务器ip</td><td></td></tr><tr><td>dns_isp</td><td>str</td><td>dns服务器ip运营商名</td><td></td></tr><tr><td>headers</td><td>obj</td><td>头部字段</td><td></td></tr></tbody></table><p><code>data</code>中的<code>headers</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>HTTP_ACCEPT_ENCODING</td><td>str</td><td></td><td></td></tr><tr><td>HTTP_X_CACHE_SERVER</td><td>str</td><td>CDN服务器名</td><td></td></tr><tr><td>HTTP_X_CACHE_SERVER_ADDR</td><td>str</td><td>CDN服务器ip</td><td></td></tr><tr><td>HTTP_X_BACKEND_BILI_REAL_IP</td><td>str</td><td>真实服务器ip</td><td></td></tr><tr><td>HTTP_X_BACKEND_BILI_REAL_IPPORT</td><td>str</td><td>真实服务器端口</td><td></td></tr><tr><td>HTTP_X_BACKEND_BILI_REAL_IP_CHAIN</td><td>str</td><td>真实服务器ip+端口</td><td></td></tr><tr><td>HTTP_X_SCHEME</td><td>str</td><td>访问协议</td><td></td></tr><tr><td>HTTP_HOST</td><td>str</td><td>访问域名</td><td></td></tr><tr><td>HTTP_USER_AGENT</td><td>str</td><td>客户端UA</td><td></td></tr><tr><td>HTTP_ACCEPT</td><td>str</td><td></td><td></td></tr><tr><td>HTTP_CACHE_CONTROL</td><td>str</td><td></td><td></td></tr></tbody></table><p><strong>示例：</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token string">&#39;https://api.bilibili.com/client_info&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ok&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;country&quot;</span><span class="token operator">:</span> <span class="token string">&quot;中国&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;ip&quot;</span><span class="token operator">:</span> <span class="token string">&quot;36.40.120.140&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;province&quot;</span><span class="token operator">:</span> <span class="token string">&quot;陕西&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;city&quot;</span><span class="token operator">:</span> <span class="token string">&quot;渭南&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;district&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
        <span class="token property">&quot;isp&quot;</span><span class="token operator">:</span> <span class="token string">&quot;电信&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;dns&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
        <span class="token property">&quot;dns_isp&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
        <span class="token property">&quot;headers&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;HTTP_ACCEPT_ENCODING&quot;</span><span class="token operator">:</span> <span class="token string">&quot;gzip&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;HTTP_X_CACHE_SERVER&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ks-bj-webcdn-07&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;HTTP_X_CACHE_SERVER_ADDR&quot;</span><span class="token operator">:</span> <span class="token string">&quot;10.33.2.170&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;HTTP_X_BACKEND_BILI_REAL_IP&quot;</span><span class="token operator">:</span> <span class="token string">&quot;36.40.120.140&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;HTTP_X_BACKEND_BILI_REAL_IPPORT&quot;</span><span class="token operator">:</span> <span class="token string">&quot;22058&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;HTTP_X_BACKEND_BILI_REAL_IP_CHAIN&quot;</span><span class="token operator">:</span> <span class="token string">&quot;36.40.120.140:22058&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;HTTP_X_SCHEME&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;HTTP_HOST&quot;</span><span class="token operator">:</span> <span class="token string">&quot;api.bilibili.com&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;HTTP_USER_AGENT&quot;</span><span class="token operator">:</span> <span class="token string">&quot;PostmanRuntime/7.26.8&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;HTTP_ACCEPT&quot;</span><span class="token operator">:</span> <span class="token string">&quot;*/*&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;HTTP_CACHE_CONTROL&quot;</span><span class="token operator">:</span> <span class="token string">&quot;no-cache&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,14),p=[d];function e(r,c){return s(),n("div",null,p)}const i=t(o,[["render",e],["__file","client_info.html.vue"]]);export{i as default};
