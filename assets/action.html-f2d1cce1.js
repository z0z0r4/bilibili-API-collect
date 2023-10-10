import{_ as o,r as d,o as r,c,a as n,b as s,d as e,w as p,e as t}from"./app-4ea165c6.js";const l={},i=t('<h1 id="收藏夹操作" tabindex="-1"><a class="header-anchor" href="#收藏夹操作" aria-hidden="true">#</a> 收藏夹操作</h1><h2 id="管理收藏夹" tabindex="-1"><a class="header-anchor" href="#管理收藏夹" aria-hidden="true">#</a> 管理收藏夹</h2><h3 id="新建收藏夹" tabindex="-1"><a class="header-anchor" href="#新建收藏夹" aria-hidden="true">#</a> 新建收藏夹</h3><blockquote><p>https://api.bilibili.com/x/v3/fav/folder/add</p></blockquote><p><em>请求方式：POST</em></p><p>认证方式：APP或Cookie（SESSDATA）</p><p><strong>正文参数（ application/x-www-form-urlencoded ）：</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>title</td><td>str</td><td>收藏夹标题</td><td>必要</td><td></td></tr><tr><td>intro</td><td>str</td><td>收藏夹简介</td><td>非必要</td><td>默认为空</td></tr><tr><td>privacy</td><td>num</td><td>是否公开</td><td>非必要</td><td>默认为公开<br>0：公开<br>1：私密</td></tr><tr><td>cover</td><td>str</td><td>封面图url</td><td>非必要</td><td>封面会被审核</td></tr><tr><td>csrf</td><td>str</td><td>CSRF Token（位于cookie）</td><td>Cookie方式必要</td><td></td></tr></tbody></table><p><strong>json回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功<br>-102：账号被封停</td></tr><tr><td>message</td><td>str</td><td>错误信息</td><td>默认为0</td></tr><tr><td>ttl</td><td>num</td><td>1</td><td></td></tr><tr><td>data</td><td>obj</td><td>信息本体</td><td></td></tr></tbody></table><p><code>data</code>对象：</p><p>略....</p>',13),u=n("code",null,"data",-1),k=t(`<p><strong>示例：</strong></p><p>创建一个叫<code>test</code>,简介是<code>2333</code>,封面<code>https://i0.hdslb.com/bfs/space/cb1c3ef50e22b6096fde67febe863494caefebad.png</code>,的公开收藏夹:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token string">&#39;https://api.bilibili.com/x/v3/fav/folder/add&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;title=test&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;intro=2333&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;privacy=0&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;cover=https://i0.hdslb.com/bfs/space/cb1c3ef50e22b6096fde67febe863494caefebad.png&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;csrf=xxxx&#39;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-b</span> <span class="token string">&#39;SESSDATA=xxxx&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;ttl&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">1182306172</span><span class="token punctuation">,</span>
        <span class="token property">&quot;fid&quot;</span><span class="token operator">:</span> <span class="token number">11823061</span><span class="token punctuation">,</span>
        <span class="token property">&quot;mid&quot;</span><span class="token operator">:</span> <span class="token number">470310172</span><span class="token punctuation">,</span>
        <span class="token property">&quot;attr&quot;</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
        <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;test&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;cover&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://i0.hdslb.com/bfs/space/cb1c3ef50e22b6096fde67febe863494caefebad.png&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;upper&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;mid&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;face&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;followed&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            <span class="token property">&quot;vip_type&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;vip_statue&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;cover_type&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;cnt_info&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;collect&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;play&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;thumb_up&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;share&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;intro&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2333&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;ctime&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;mtime&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;state&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;fav_state&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;like_state&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;media_count&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="修改收藏夹" tabindex="-1"><a class="header-anchor" href="#修改收藏夹" aria-hidden="true">#</a> 修改收藏夹</h3><blockquote><p>https://api.bilibili.com/x/v3/fav/folder/edit</p></blockquote><p><em>请求方式：POST</em></p><p>认证方式：APP或Cookie（SESSDATA）</p><p><strong>正文参数（ application/x-www-form-urlencoded ）：</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>media_id</td><td>num</td><td>目标收藏夹mdid</td><td>必要</td><td></td></tr><tr><td>title</td><td>str</td><td>修改收藏夹标题</td><td>必要</td><td></td></tr><tr><td>intro</td><td>str</td><td>修改收藏夹简介</td><td>非必要</td><td></td></tr><tr><td>privacy</td><td>num</td><td>是否公开</td><td>非必要</td><td>默认为公开<br><br>0：公开<br>1：私密</td></tr><tr><td>cover</td><td>str</td><td>封面图url</td><td>非必要</td><td>封面会被审核</td></tr><tr><td>csrf</td><td>str</td><td>CSRF Token（位于cookie）</td><td>Cookie方式必要</td><td></td></tr></tbody></table><p><strong>json回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功<br>-102：账号被封停</td></tr><tr><td>message</td><td>str</td><td>错误信息</td><td>默认为0</td></tr><tr><td>ttl</td><td>num</td><td>1</td><td></td></tr><tr><td>data</td><td>obj</td><td>信息本体</td><td></td></tr></tbody></table><p><code>data</code>对象：</p><p>略....</p>`,15),b=n("code",null,"data",-1),v=t(`<p><strong>示例：</strong></p><p>修改id为<code>1182306172</code>的名字为<code>test</code>,简介为<code>2333</code>,封面为<code>https://i0.hdslb.com/bfs/space/cb1c3ef50e22b6096fde67febe863494caefebad.png</code>,公开收藏夹:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token string">&#39;https://api.bilibili.com/x/v3/fav/folder/edit&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;media_id=1182306172&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;title=test&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;intro=2333&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;privacy=0&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;cover=https://i0.hdslb.com/bfs/space/cb1c3ef50e22b6096fde67febe863494caefebad.png&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;csrf=xxxx&#39;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-b</span> <span class="token string">&#39;SESSDATA=xxxx&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;ttl&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">1182306172</span><span class="token punctuation">,</span>
        <span class="token property">&quot;fid&quot;</span><span class="token operator">:</span> <span class="token number">11823061</span><span class="token punctuation">,</span>
        <span class="token property">&quot;mid&quot;</span><span class="token operator">:</span> <span class="token number">470310172</span><span class="token punctuation">,</span>
        <span class="token property">&quot;attr&quot;</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
        <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;test&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;cover&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://i0.hdslb.com/bfs/space/cb1c3ef50e22b6096fde67febe863494caefebad.png&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;upper&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;mid&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;face&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;followed&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            <span class="token property">&quot;vip_type&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;vip_statue&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;cover_type&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;cnt_info&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;collect&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;play&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;thumb_up&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;share&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;intro&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2333&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;ctime&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;mtime&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;state&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;fav_state&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;like_state&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;media_count&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="删除收藏夹" tabindex="-1"><a class="header-anchor" href="#删除收藏夹" aria-hidden="true">#</a> 删除收藏夹</h3><blockquote><p>https://api.bilibili.com/x/v3/fav/folder/del</p></blockquote><p><em>请求方式：POST</em></p><p>认证方式：APP或Cookie（SESSDATA）</p><p><strong>正文参数（ application/x-www-form-urlencoded ）：</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>media_ids</td><td>nums</td><td>目标收藏夹mdid列表</td><td>必要</td><td>每个成员间用<code>,</code>分隔</td></tr><tr><td>csrf</td><td>str</td><td>CSRF Token（位于cookie）</td><td>Cookie方式必要</td><td></td></tr></tbody></table><p><strong>json回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功</td></tr><tr><td>message</td><td>str</td><td>错误信息</td><td>成功为0</td></tr><tr><td>ttl</td><td>num</td><td>1</td><td></td></tr><tr><td>data</td><td>num</td><td>信息本体</td><td>成功为0</td></tr></tbody></table><p><strong>示例：</strong></p><p>删除id为<code>1182306172</code>的收藏夹:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token string">&#39;https://api.bilibili.com/x/v3/fav/folder/del&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;media_ids=1182306172&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;csrf=xxxx&#39;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-b</span> <span class="token string">&#39;SESSDATA=xxxx&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;message&quot;</span><span class="token operator">:</span><span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;ttl&quot;</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span><span class="token number">0</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="管理收藏内容" tabindex="-1"><a class="header-anchor" href="#管理收藏内容" aria-hidden="true">#</a> 管理收藏内容</h2><h3 id="批量复制内容" tabindex="-1"><a class="header-anchor" href="#批量复制内容" aria-hidden="true">#</a> 批量复制内容</h3><blockquote><p>https://api.bilibili.com/x/v3/fav/resource/copy</p></blockquote><p><em>请求方式：POST</em></p><p>认证方式：APP或Cookie（SESSDATA）</p><p><strong>正文参数（ application/x-www-form-urlencoded ）：</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>src_media_id</td><td>num</td><td>源收藏夹id</td><td>必要</td><td></td></tr><tr><td>tar_media_id</td><td>num</td><td>目标收藏夹id</td><td>必要</td><td></td></tr><tr><td>mid</td><td>num</td><td>当前用户mid</td><td>必要</td><td></td></tr><tr><td>resources</td><td>strs</td><td>目标内容id列表</td><td>必要</td><td>格式：{内容id}:{内容类型}<br>每个成员间用<code>,</code>分隔<br>类型：<br>2：视频稿件<br>12：音频<br>21：视频合集<br>内容id：<br>视频稿件：视频稿件avid<br>音频：音频auid<br>视频合集：视频合集id</td></tr><tr><td>platform</td><td>str</td><td>平台标识</td><td>非必要</td><td>可为web</td></tr><tr><td>csrf</td><td>str</td><td>CSRF Token（位于cookie）</td><td>Cookie方式必要</td><td></td></tr></tbody></table><p><strong>json回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功<br>-101：账号未登录<br>-111：csrf校验失败<br>-400：请求错误<br>11010：您访问的内容不存在</td></tr><tr><td>message</td><td>str</td><td>错误信息</td><td>默认为0</td></tr><tr><td>ttl</td><td>num</td><td>1</td><td></td></tr><tr><td>data</td><td>obj</td><td>信息本体</td><td>成功为0</td></tr></tbody></table><p><strong>示例：</strong></p><p>将id为<code>1288061499</code>的收藏夹中视频稿件<code>av21822819</code> <code>av21918689</code> <code>av22288065</code>复制到id为<code>1178751999</code>的收藏夹中</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token string">&#39;https://api.bilibili.com/x/v3/fav/resource/copy&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;src_media_id=1288061499&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;tar_media_id=1178751999&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;mid=233333&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;resources=21822819:2,21918689:2,22288065:2&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;platform=web&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;csrf=xxx&#39;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-b</span> <span class="token string">&#39;SESSDATA=xxx&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;message&quot;</span><span class="token operator">:</span><span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;ttl&quot;</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span><span class="token number">0</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="批量移动内容" tabindex="-1"><a class="header-anchor" href="#批量移动内容" aria-hidden="true">#</a> 批量移动内容</h3><blockquote><p>https://api.bilibili.com/x/v3/fav/resource/move</p></blockquote><p><em>请求方式：POST</em></p><p>认证方式：APP或Cookie（SESSDATA）</p><p><strong>正文参数（ application/x-www-form-urlencoded ）：</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>src_media_id</td><td>num</td><td>源收藏夹id</td><td>必要</td><td></td></tr><tr><td>tar_media_id</td><td>num</td><td>目标收藏夹id</td><td>必要</td><td></td></tr><tr><td>mid</td><td>num</td><td>当前用户mid</td><td>必要</td><td></td></tr><tr><td>resources</td><td>strs</td><td>目标内容id列表</td><td>必要</td><td>格式：{内容id}:{内容类型}<br>每个成员间用<code>,</code>分隔<br>类型：<br>2：视频稿件<br>12：音频<br>21：视频合集<br>内容id：<br>视频稿件：视频稿件avid<br>音频：音频auid<br>视频合集：视频合集id</td></tr><tr><td>platform</td><td>str</td><td>平台标识</td><td>非必要</td><td>可为web</td></tr><tr><td>csrf</td><td>str</td><td>CSRF Token（位于cookie）</td><td>Cookie方式必要</td><td></td></tr></tbody></table><p><strong>json回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功<br>-101：账号未登录<br>-111：csrf校验失败<br>-400：请求错误<br>11010：您访问的内容不存在</td></tr><tr><td>message</td><td>str</td><td>错误信息</td><td>默认为0</td></tr><tr><td>ttl</td><td>num</td><td>1</td><td></td></tr><tr><td>data</td><td>obj</td><td>信息本体</td><td>成功为0</td></tr></tbody></table><p><strong>示例：</strong></p><p>将id为<code>1288061499</code>的收藏夹中视频稿件<code>av21822819</code> <code>av21918689</code> <code>av22288065</code>移动到id为<code>1178751999</code>的收藏夹中</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token string">&#39;https://api.bilibili.com/x/v3/fav/resource/move&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;src_media_id=1288061499&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;tar_media_id=1178751999&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;mid=233333&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;resources=21822819:2,21918689:2,22288065:2&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;platform=web&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;csrf=xxx&#39;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-b</span> <span class="token string">&#39;SESSDATA=xxx&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;message&quot;</span><span class="token operator">:</span><span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;ttl&quot;</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span><span class="token number">0</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="批量删除内容" tabindex="-1"><a class="header-anchor" href="#批量删除内容" aria-hidden="true">#</a> 批量删除内容</h3><blockquote><p>https://api.bilibili.com/x/v3/fav/resource/batch-del</p></blockquote><p><em>请求方式：POST</em></p><p>认证方式：APP或Cookie（SESSDATA）</p><p><strong>正文参数（ application/x-www-form-urlencoded ）：</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>resources</td><td>目标内容id列表</td><td>必要</td><td>格式：{内容id}:{内容类型}<br>每个成员间用<code>,</code>分隔<br>类型：<br>2：视频稿件<br>12：音频<br>21：视频合集<br>内容id：<br>视频稿件：视频稿件avid<br>音频：音频auid<br>视频合集：视频合集id</td><td></td></tr><tr><td>media_id</td><td>num</td><td>目标收藏夹id</td><td>必要</td><td></td></tr><tr><td>platform</td><td>str</td><td>平台标识</td><td>非必要</td><td>可为web</td></tr><tr><td>csrf</td><td>str</td><td>CSRF Token（位于cookie）</td><td>Cookie方式必要</td><td></td></tr></tbody></table><p><strong>json回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功<br>-101：账号未登录<br>-111：csrf校验失败<br>-400：请求错误<br>11010：您访问的内容不存在</td></tr><tr><td>message</td><td>str</td><td>错误信息</td><td>默认为0</td></tr><tr><td>ttl</td><td>num</td><td>1</td><td></td></tr><tr><td>data</td><td>obj</td><td>信息本体</td><td>成功为0</td></tr></tbody></table><p><strong>示例：</strong></p><p>将id为<code>1178751999</code>的收藏夹中视频稿件<code>av21822819</code> <code>av21918689</code> <code>av22288065</code>取消收藏</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token string">&#39;https://api.bilibili.com/x/v3/fav/resource/batch-del&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;resources=21822819:2,21918689:2,22288065:2&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;media_id=1178751999&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;platform=web&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;csrf=xxx&#39;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-b</span> <span class="token string">&#39;SESSDATA=xxx&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;message&quot;</span><span class="token operator">:</span><span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;ttl&quot;</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span><span class="token number">0</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="清空所有失效内容" tabindex="-1"><a class="header-anchor" href="#清空所有失效内容" aria-hidden="true">#</a> 清空所有失效内容</h3><blockquote><p>https://api.bilibili.com/x/v3/fav/resource/clean</p></blockquote><p><em>请求方式：POST</em></p><p>认证方式：APP或Cookie（SESSDATA）</p><p><strong>正文参数（ application/x-www-form-urlencoded ）：</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>media_id</td><td>num</td><td>目标收藏夹id</td><td>必要</td><td></td></tr><tr><td>csrf</td><td>str</td><td>CSRF Token（位于cookie）</td><td>Cookie方式必要</td><td></td></tr></tbody></table><p><strong>json回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功</td></tr><tr><td>message</td><td>str</td><td>错误信息</td><td>默认为0</td></tr><tr><td>ttl</td><td>num</td><td>1</td><td></td></tr><tr><td>data</td><td>obj</td><td>信息本体</td><td>成功为0</td></tr></tbody></table><p><strong>示例：</strong></p><p>清理id为<code>1161340172</code>的收藏夹</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token string">&#39;https://api.bilibili.com/x/v3/fav/resource/clean&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;media_id=1161340172&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;csrf=xxx&#39;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-b</span> <span class="token string">&#39;SESSDATA=xxx&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;message&quot;</span><span class="token operator">:</span><span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;ttl&quot;</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span><span class="token number">0</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,70);function m(h,q){const a=d("RouterLink");return r(),c("div",null,[i,n("p",null,[s("详见"),e(a,{to:"/docs/fav/info.html#%E8%8E%B7%E5%8F%96%E6%94%B6%E8%97%8F%E5%A4%B9%E5%85%83%E6%95%B0%E6%8D%AE"},{default:p(()=>[s("获取收藏夹元数据")]),_:1}),s("中的"),u,s("对象")]),k,n("p",null,[s("详见"),e(a,{to:"/docs/fav/info.html#%E8%8E%B7%E5%8F%96%E6%94%B6%E8%97%8F%E5%A4%B9%E5%85%83%E6%95%B0%E6%8D%AE"},{default:p(()=>[s("获取收藏夹元数据")]),_:1}),s("中的"),b,s("对象")]),v])}const y=o(l,[["render",m],["__file","action.html.vue"]]);export{y as default};
