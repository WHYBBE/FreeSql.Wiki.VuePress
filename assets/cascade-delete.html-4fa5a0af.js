import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e as t}from"./app-4f78730c.js";const e={},p=t(`<h1 id="级联删除" tabindex="-1"><a class="header-anchor" href="#级联删除" aria-hidden="true">#</a> 级联删除</h1><h2 id="基于【对象】级联删除" tabindex="-1"><a class="header-anchor" href="#基于【对象】级联删除" aria-hidden="true">#</a> 基于【对象】级联删除</h2><blockquote><p>比如 Include/IncludeMany 查询的对象，可以使用此方法级联删除它们。</p></blockquote><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> repo <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">GetRepository</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>UserGroup<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
repo<span class="token punctuation">.</span>DbContextOptions<span class="token punctuation">.</span>EnableCascadeSave <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token comment">//关键设置</span>
repo<span class="token punctuation">.</span><span class="token function">Insert</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">UserGroup</span>
<span class="token punctuation">{</span>
    GroupName <span class="token operator">=</span> <span class="token string">&quot;group01&quot;</span><span class="token punctuation">,</span>
    Users <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">List<span class="token punctuation">&lt;</span>User<span class="token punctuation">&gt;</span></span>
    <span class="token punctuation">{</span>
        <span class="token keyword">new</span> <span class="token constructor-invocation class-name">User</span> <span class="token punctuation">{</span> Username <span class="token operator">=</span> <span class="token string">&quot;admin01&quot;</span><span class="token punctuation">,</span> Password <span class="token operator">=</span> <span class="token string">&quot;pwd01&quot;</span><span class="token punctuation">,</span> UserExt <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">UserExt</span> <span class="token punctuation">{</span> Remark <span class="token operator">=</span> <span class="token string">&quot;用户备注01&quot;</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token keyword">new</span> <span class="token constructor-invocation class-name">User</span> <span class="token punctuation">{</span> Username <span class="token operator">=</span> <span class="token string">&quot;admin02&quot;</span><span class="token punctuation">,</span> Password <span class="token operator">=</span> <span class="token string">&quot;pwd02&quot;</span><span class="token punctuation">,</span> UserExt <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">UserExt</span> <span class="token punctuation">{</span> Remark <span class="token operator">=</span> <span class="token string">&quot;用户备注02&quot;</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token keyword">new</span> <span class="token constructor-invocation class-name">User</span> <span class="token punctuation">{</span> Username <span class="token operator">=</span> <span class="token string">&quot;admin03&quot;</span><span class="token punctuation">,</span> Password <span class="token operator">=</span> <span class="token string">&quot;pwd03&quot;</span><span class="token punctuation">,</span> UserExt <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">UserExt</span> <span class="token punctuation">{</span> Remark <span class="token operator">=</span> <span class="token string">&quot;用户备注03&quot;</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//级联添加测试数据</span>
<span class="token comment">//INSERT INTO &quot;usergroup&quot;(&quot;groupname&quot;) VALUES(&#39;group01&#39;) RETURNING &quot;id&quot;</span>
<span class="token comment">//INSERT INTO &quot;user&quot;(&quot;username&quot;, &quot;password&quot;, &quot;groupid&quot;) VALUES(&#39;admin01&#39;, &#39;pwd01&#39;, 1), (&#39;admin02&#39;, &#39;pwd02&#39;, 1), (&#39;admin03&#39;, &#39;pwd03&#39;, 1) RETURNING &quot;id&quot; as &quot;Id&quot;, &quot;username&quot; as &quot;Username&quot;, &quot;password&quot; as &quot;Password&quot;, &quot;groupid&quot; as &quot;GroupId&quot;</span>
<span class="token comment">//INSERT INTO &quot;userext&quot;(&quot;userid&quot;, &quot;remark&quot;) VALUES(3, &#39;用户备注01&#39;), (4, &#39;用户备注02&#39;), (5, &#39;用户备注03&#39;)</span>

<span class="token class-name"><span class="token keyword">var</span></span> groups <span class="token operator">=</span> repo<span class="token punctuation">.</span>Select
    <span class="token punctuation">.</span><span class="token function">IncludeMany</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>Users<span class="token punctuation">,</span> 
        then <span class="token operator">=&gt;</span> then<span class="token punctuation">.</span><span class="token function">Include</span><span class="token punctuation">(</span>b <span class="token operator">=&gt;</span> b<span class="token punctuation">.</span>UserExt<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
repo<span class="token punctuation">.</span><span class="token function">Delete</span><span class="token punctuation">(</span>groups<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//级联删除，递归向下遍历 group OneToOne/OneToMany/ManyToMany 导航属性</span>
<span class="token comment">//DELETE FROM &quot;userext&quot; WHERE (&quot;userid&quot; IN (3,4,5))</span>
<span class="token comment">//DELETE FROM &quot;user&quot; WHERE (&quot;id&quot; IN (3,4,5))</span>
<span class="token comment">//DELETE FROM &quot;usergroup&quot; WHERE (&quot;id&quot; = 1)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="基于【数据库】级联删除" tabindex="-1"><a class="header-anchor" href="#基于【数据库】级联删除" aria-hidden="true">#</a> 基于【数据库】级联删除</h2><blockquote><p>根据设置的导航属性，递归删除 OneToOne/OneToMany/ManyToMany 对应数据，并返回已删除的数据。此功能不依赖数据库外键</p></blockquote><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> repo <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">GetRepository</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>UserGroup<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name"><span class="token keyword">var</span></span> ret <span class="token operator">=</span> repo<span class="token punctuation">.</span><span class="token function">DeleteCascadeByDatabase</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>Id <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//SELECT a.&quot;id&quot;, a.&quot;username&quot;, a.&quot;password&quot;, a.&quot;groupid&quot; FROM &quot;user&quot; a WHERE (a.&quot;groupid&quot; = 1)</span>
<span class="token comment">//SELECT a.&quot;userid&quot;, a.&quot;remark&quot; FROM &quot;userext&quot; a WHERE (a.&quot;userid&quot; IN (3,4,5))</span>
<span class="token comment">//DELETE FROM &quot;userext&quot; WHERE (&quot;userid&quot; IN (3,4,5))</span>
<span class="token comment">//DELETE FROM &quot;user&quot; WHERE (&quot;id&quot; IN (3,4,5))</span>
<span class="token comment">//DELETE FROM &quot;usergroup&quot; WHERE (&quot;id&quot; = 1)</span>

<span class="token comment">//ret   Count = 7 System.Collections.Generic.List&lt;object&gt;</span>
<span class="token comment">//  [0] {UserExt} object {UserExt}</span>
<span class="token comment">//  [1] {UserExt} object {UserExt}</span>
<span class="token comment">//  [2] {UserExt} object {UserExt}</span>
<span class="token comment">//  [3] {User}     object {User}</span>
<span class="token comment">//  [4] {User}     object {User}</span>
<span class="token comment">//  [5] {User}   object {User}</span>
<span class="token comment">//  [6] {UserGroup} object {UserGroup}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserGroup</span>
<span class="token punctuation">{</span>
    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Column</span><span class="token attribute-arguments"><span class="token punctuation">(</span>IsIdentity <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> Id <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> GroupName <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>

    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Navigate</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token keyword">nameof</span><span class="token punctuation">(</span>User<span class="token punctuation">.</span>GroupId<span class="token punctuation">)</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
    <span class="token keyword">public</span> <span class="token return-type class-name">List<span class="token punctuation">&lt;</span>User<span class="token punctuation">&gt;</span></span> Users <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">User</span>
<span class="token punctuation">{</span>
    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Column</span><span class="token attribute-arguments"><span class="token punctuation">(</span>IsIdentity <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> Id <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Username <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Password <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> GroupId <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>

    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Navigate</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token keyword">nameof</span><span class="token punctuation">(</span>Id<span class="token punctuation">)</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
    <span class="token keyword">public</span> <span class="token return-type class-name">UserExt</span> UserExt <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserExt</span>
<span class="token punctuation">{</span>
    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Column</span><span class="token attribute-arguments"><span class="token punctuation">(</span>IsPrimary <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> UserId <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Remark <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>

    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Navigate</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token keyword">nameof</span><span class="token punctuation">(</span>UserId<span class="token punctuation">)</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
    <span class="token keyword">public</span> <span class="token return-type class-name">User</span> User <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),o=[p];function c(u,l){return s(),a("div",null,o)}const k=n(e,[["render",c],["__file","cascade-delete.html.vue"]]);export{k as default};