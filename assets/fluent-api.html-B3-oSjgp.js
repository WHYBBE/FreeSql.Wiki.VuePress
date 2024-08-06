import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as p,o,c as e,a as n,b as s,d as c,w as u,e as l}from"./app-hrK1pXjY.js";const i={},k=n("h2",{id:"fluent-api-support",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#fluent-api-support","aria-hidden":"true"},"#"),s(" Fluent API Support")],-1),r=n("p",null,[s("FreeSql offers Fluent API methods for configuring entity database features using a chain of calls. The "),n("code",null,"Fluent API"),s(" method names match the feature names and there are three ways to use it. You only need to choose one of the methods:")],-1),d=n("code",null,"fsql",-1),v=n("code",null,"IFreeSql",-1),m=l(`<h2 id="configentity" tabindex="-1"><a class="header-anchor" href="#configentity" aria-hidden="true">#</a> ConfigEntity</h2><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code>fsql<span class="token punctuation">.</span>CodeFirst
    <span class="token punctuation">.</span><span class="token generic-method"><span class="token function">ConfigEntity</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>TestFluenttb1<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span>
    <span class="token punctuation">{</span>
        a<span class="token punctuation">.</span><span class="token function">Name</span><span class="token punctuation">(</span><span class="token string">&quot;xxdkdkdk1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        a<span class="token punctuation">.</span><span class="token function">Property</span><span class="token punctuation">(</span>b <span class="token operator">=&gt;</span> b<span class="token punctuation">.</span>Id<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Name</span><span class="token punctuation">(</span><span class="token string">&quot;Id22&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">IsIdentity</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        a<span class="token punctuation">.</span><span class="token function">Property</span><span class="token punctuation">(</span>b <span class="token operator">=&gt;</span> b<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">DbType</span><span class="token punctuation">(</span><span class="token string">&quot;varchar(100)&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">IsNullable</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token generic-method"><span class="token function">ConfigEntity</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>TestFluenttb2<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span>
    <span class="token punctuation">{</span>
        a<span class="token punctuation">.</span><span class="token function">Name</span><span class="token punctuation">(</span><span class="token string">&quot;xxdkdkdk2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        a<span class="token punctuation">.</span><span class="token function">Property</span><span class="token punctuation">(</span>b <span class="token operator">=&gt;</span> b<span class="token punctuation">.</span>Id<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Name</span><span class="token punctuation">(</span><span class="token string">&quot;Id22&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">IsIdentity</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        a<span class="token punctuation">.</span><span class="token function">Property</span><span class="token punctuation">(</span>b <span class="token operator">=&gt;</span> b<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">DbType</span><span class="token punctuation">(</span><span class="token string">&quot;varchar(100)&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">IsNullable</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Example entity classes</span>
<span class="token keyword">class</span> <span class="token class-name">TestFluenttb1</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> Id <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> name <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token string">&quot;defaultValue&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Table</span><span class="token attribute-arguments"><span class="token punctuation">(</span>Name <span class="token operator">=</span> <span class="token string">&quot;cccccdddwww&quot;</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
<span class="token keyword">class</span> <span class="token class-name">TestFluenttb2</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> Id <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> name <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token string">&quot;defaultValue&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>FreeSql.DbContext v1.4.0+ implements a syntax similar to EfCore Fluent API 99%.</p></blockquote><h2 id="entity" tabindex="-1"><a class="header-anchor" href="#entity" aria-hidden="true">#</a> Entity</h2><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code>fsql<span class="token punctuation">.</span>CodeFirst<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Entity</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Song<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span>eb <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    eb<span class="token punctuation">.</span><span class="token function">ToTable</span><span class="token punctuation">(</span><span class="token string">&quot;tb_song&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    eb<span class="token punctuation">.</span><span class="token function">Ignore</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>Field1<span class="token punctuation">)</span><span class="token punctuation">;</span>
    eb<span class="token punctuation">.</span><span class="token function">Property</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>Title<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">HasColumnType</span><span class="token punctuation">(</span><span class="token string">&quot;varchar(50)&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">IsRequired</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    eb<span class="token punctuation">.</span><span class="token function">Property</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>Url<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">HasMaxLength</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    eb<span class="token punctuation">.</span><span class="token function">Property</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>RowVersion<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">IsRowVersion</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    eb<span class="token punctuation">.</span><span class="token function">Property</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>CreateTime<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">HasDefaultValueSql</span><span class="token punctuation">(</span><span class="token string">&quot;current_timestamp&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    eb<span class="token punctuation">.</span><span class="token function">HasKey</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>Id<span class="token punctuation">)</span><span class="token punctuation">;</span>
    eb<span class="token punctuation">.</span><span class="token function">HasIndex</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token punctuation">{</span> a<span class="token punctuation">.</span>Id<span class="token punctuation">,</span> a<span class="token punctuation">.</span>Title <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">IsUnique</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">HasName</span><span class="token punctuation">(</span><span class="token string">&quot;idx_xxx11&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// One-to-many, many-to-one</span>
    eb<span class="token punctuation">.</span><span class="token function">HasOne</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>Type<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">HasForeignKey</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>TypeId<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">WithMany</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>Songs<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// Many-to-many</span>
    eb<span class="token punctuation">.</span><span class="token function">HasMany</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>Tags<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">WithMany</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>Songs<span class="token punctuation">,</span> <span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token type-expression class-name">Song_tag</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

fsql<span class="token punctuation">.</span>CodeFirst<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Entity</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>SongType<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span>eb <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    eb<span class="token punctuation">.</span><span class="token function">HasMany</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>Songs<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">WithOne</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>Type<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">HasForeignKey</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>TypeId<span class="token punctuation">)</span><span class="token punctuation">;</span>
    eb<span class="token punctuation">.</span><span class="token function">HasData</span><span class="token punctuation">(</span><span class="token keyword">new</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">new</span> <span class="token constructor-invocation class-name">SongType</span>
        <span class="token punctuation">{</span>
            Id <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span>
            Name <span class="token operator">=</span> <span class="token string">&quot;Pop&quot;</span><span class="token punctuation">,</span>
            Songs <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">List<span class="token punctuation">&lt;</span>Song<span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token keyword">new</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
            <span class="token punctuation">{</span>
                <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Song</span><span class="token punctuation">{</span> Title <span class="token operator">=</span> <span class="token string">&quot;Truly Love You&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Song</span><span class="token punctuation">{</span> Title <span class="token operator">=</span> <span class="token string">&quot;Love You Ten Thousand Years&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token keyword">new</span> <span class="token constructor-invocation class-name">SongType</span>
        <span class="token punctuation">{</span>
            Id <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">,</span>
            Name <span class="token operator">=</span> <span class="token string">&quot;Country&quot;</span><span class="token punctuation">,</span>
            Songs <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">List<span class="token punctuation">&lt;</span>Song<span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token keyword">new</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
            <span class="token punctuation">{</span>
                <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Song</span><span class="token punctuation">{</span> Title <span class="token operator">=</span> <span class="token string">&quot;Hometown People&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SongType</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> Id <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Name <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token return-type class-name">List<span class="token punctuation">&lt;</span>Song<span class="token punctuation">&gt;</span></span> Songs <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Song</span> <span class="token punctuation">{</span>
    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Column</span><span class="token attribute-arguments"><span class="token punctuation">(</span>IsIdentity <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> Id <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Title <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Url <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token return-type class-name">DateTime</span> CreateTime <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> TypeId <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token return-type class-name">SongType</span> Type <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> Field1 <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">long</span></span> RowVersion <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ientitytypeconfiguration" tabindex="-1"><a class="header-anchor" href="#ientitytypeconfiguration" aria-hidden="true">#</a> IEntityTypeConfiguration</h2><p>Configure entities by inheriting from the <code>IEntityTypeConfiguration</code> interface.</p><ul><li>.NET Framework 4.0 is not supported.</li></ul><h3 id="entity-configuration-class" tabindex="-1"><a class="header-anchor" href="#entity-configuration-class" aria-hidden="true">#</a> Entity Configuration Class</h3><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SongConfiguration</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">IEntityTypeConfiguration<span class="token punctuation">&lt;</span>Song<span class="token punctuation">&gt;</span></span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Configure</span><span class="token punctuation">(</span><span class="token class-name">EfCoreTableFluent<span class="token punctuation">&lt;</span>Song<span class="token punctuation">&gt;</span></span> eb<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        eb<span class="token punctuation">.</span><span class="token function">ToTable</span><span class="token punctuation">(</span><span class="token string">&quot;tb_song1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        eb<span class="token punctuation">.</span><span class="token function">Ignore</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>Field1<span class="token punctuation">)</span><span class="token punctuation">;</span>
        eb<span class="token punctuation">.</span><span class="token function">Property</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>Title<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">HasColumnType</span><span class="token punctuation">(</span><span class="token string">&quot;varchar(50)&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">IsRequired</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        eb<span class="token punctuation">.</span><span class="token function">Property</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>Url<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">HasMaxLength</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        eb<span class="token punctuation">.</span><span class="token function">Property</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>RowVersion<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">IsRowVersion</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        eb<span class="token punctuation">.</span><span class="token function">Property</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>CreateTime<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">HasDefaultValueSql</span><span class="token punctuation">(</span><span class="token string">&quot;current_timestamp&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        eb<span class="token punctuation">.</span><span class="token function">HasKey</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>Id<span class="token punctuation">)</span><span class="token punctuation">;</span>
        eb<span class="token punctuation">.</span><span class="token function">HasIndex</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>Title<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">IsUnique</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">HasName</span><span class="token punctuation">(</span><span class="token string">&quot;idx_tb_song1111&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// One-to-many, many-to-one</span>
        eb<span class="token punctuation">.</span><span class="token function">HasOne</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>Type<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">HasForeignKey</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>TypeId<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">WithMany</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>Songs<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// Many-to-many</span>
        eb<span class="token punctuation">.</span><span class="token function">HasMany</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>Tags<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">WithMany</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>Songs<span class="token punctuation">,</span> <span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token type-expression class-name">Song_tag</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="two-ways-to-use" tabindex="-1"><a class="header-anchor" href="#two-ways-to-use" aria-hidden="true">#</a> Two Ways to Use</h3><ol><li><strong>Single Configuration</strong></li></ol><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code>fsql<span class="token punctuation">.</span>CodeFirst<span class="token punctuation">.</span><span class="token function">ApplyConfiguration</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">SongConfiguration</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li><strong>Batch Configuration</strong></li></ol><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code>fsql<span class="token punctuation">.</span>CodeFirst<span class="token punctuation">.</span><span class="token function">ApplyConfigurationsFromAssembly</span><span class="token punctuation">(</span><span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token type-expression class-name">SongConfiguration</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Assembly<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="priority" tabindex="-1"><a class="header-anchor" href="#priority" aria-hidden="true">#</a> Priority</h2><p>Database features &gt; Entity attributes &gt; Fluent API &gt; Aop</p>`,17);function b(y,g){const a=p("RouterLink");return o(),e("div",null,[k,r,n("blockquote",null,[n("p",null,[d,s(" refers to an "),v,s(" object. Configuration should generally be done only once to avoid performance issues. For more details, see: "),c(a,{to:"/en/guide/entity-attribute.html"},{default:u(()=>[s("《Entity Attributes》")]),_:1}),s(".")])]),m])}const h=t(i,[["render",b],["__file","fluent-api.html.vue"]]);export{h as default};