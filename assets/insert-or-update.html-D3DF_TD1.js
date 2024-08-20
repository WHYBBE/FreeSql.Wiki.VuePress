import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,e as t}from"./app-Cb7GMO-H.js";const e={},p=t(`<h1 id="insert-or-update" tabindex="-1"><a class="header-anchor" href="#insert-or-update" aria-hidden="true">#</a> Insert or Update</h1><h2 id="_1-ifreesql-insertorupdate" tabindex="-1"><a class="header-anchor" href="#_1-ifreesql-insertorupdate" aria-hidden="true">#</a> 1. IFreeSql.InsertOrUpdate</h2><p>IFreeSql defines the <code>InsertOrUpdate</code> method to handle insert or update operations, utilizing database-specific features:</p><table><thead><tr><th>Database</th><th>Features</th><th></th><th>Database</th><th>Features</th></tr></thead><tbody><tr><td>MySql</td><td>on duplicate key update</td><td></td><td>DM</td><td>merge into</td></tr><tr><td>PostgreSQL</td><td>on conflict do update</td><td></td><td>Kingbase</td><td>on conflict do update</td></tr><tr><td>SqlServer</td><td>merge into</td><td></td><td>ShengTong</td><td>merge into</td></tr><tr><td>Oracle</td><td>merge into</td><td></td><td>Nanda General</td><td>merge into</td></tr><tr><td>Sqlite</td><td>replace into</td><td></td><td>MsAccess</td><td>Not supported</td></tr><tr><td>Firebird</td><td>merge into</td><td></td><td></td><td></td></tr><tr><td>DuckDB</td><td>on conflict do update</td><td></td><td></td><td></td></tr></tbody></table><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code>fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">InsertOrUpdate</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>T<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">SetSource</span><span class="token punctuation">(</span>items<span class="token punctuation">)</span> <span class="token comment">// Data to be processed</span>
    <span class="token comment">//.IfExistsDoNothing() // If data exists, do nothing (equivalent to insert only if data does not exist)</span>
    <span class="token comment">//.UpdateSet((a, b) =&gt; a.Count == b.Count + 10) // Join table update</span>
    <span class="token punctuation">.</span><span class="token function">ExecuteAffrows</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Defaults to relying on the IsPrimary attribute of the entity, for temporary primary keys use SetSource(items, a =&gt; a.Code)</span>

<span class="token comment">// Or..</span>
<span class="token class-name"><span class="token keyword">var</span></span> sql <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>T2<span class="token punctuation">,</span> T3<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">ToSql</span><span class="token punctuation">(</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">new</span>
    <span class="token punctuation">{</span>
      id <span class="token operator">=</span> a<span class="token punctuation">.</span>id <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span>
      name <span class="token operator">=</span> <span class="token string">&quot;xxx&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> FieldAliasOptions<span class="token punctuation">.</span>AsProperty<span class="token punctuation">)</span><span class="token punctuation">;</span>

fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">InsertOrUpdate</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>T<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">SetSource</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">ExecuteAffrows</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>When the entity class has auto-increment properties, bulk <code>InsertOrUpdate</code> may be split into two executions, with the system internally computing records with unset and set auto-increment values, executing <code>insert into</code> and <code>merge into</code> commands (using transactions).</p><p>Note: The FreeSql.Repository generic repository also has an <code>InsertOrUpdate</code> method, but its mechanism is different.</p><hr><h2 id="_2-dictionary-insert-or-update" tabindex="-1"><a class="header-anchor" href="#_2-dictionary-insert-or-update" aria-hidden="true">#</a> 2. Dictionary Insert or Update</h2><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> dic <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Dictionary<span class="token punctuation">&lt;</span><span class="token keyword">string</span><span class="token punctuation">,</span> <span class="token keyword">object</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
dic<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
dic<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;xxxx&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

fsql<span class="token punctuation">.</span><span class="token function">InsertOrUpdateDict</span><span class="token punctuation">(</span>dic<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">AsTable</span><span class="token punctuation">(</span><span class="token string">&quot;table1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">WherePrimary</span><span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ExecuteAffrows</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// (Generates SQL as above)</span>
<span class="token comment">// Note: List&lt;Dictionary&lt;string, object&gt;&gt; for batch updates</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="_3-high-performance-bulkcopy" tabindex="-1"><a class="header-anchor" href="#_3-high-performance-bulkcopy" aria-hidden="true">#</a> 3. High-Performance BulkCopy</h2><table><thead><tr><th>Package</th><th>Extension Method</th><th>Description (v3.2.693)</th></tr></thead><tbody><tr><td>FreeSql.Provider.SqlServer</td><td>ExecuteSqlBulkCopy</td><td></td></tr><tr><td>FreeSql.Provider.MySqlConnector</td><td>ExecuteMySqlBulkCopy</td><td></td></tr><tr><td>FreeSql.Provider.Oracle</td><td>ExecuteOracleBulkCopy</td><td></td></tr><tr><td>FreeSql.Provider.Dameng</td><td>ExecuteDmBulkCopy</td><td>DM</td></tr><tr><td>FreeSql.Provider.PostgreSQL</td><td>ExecutePgCopy</td><td></td></tr><tr><td>FreeSql.Provider.KingbaseES</td><td>ExecuteKdbCopy</td><td>Kingbase</td></tr></tbody></table><p>Principle: Use BulkCopy to insert data into a temporary table, then use MERGE INTO for join operations.</p><p>Note: Significant benefits when the number of updated fields exceeds 3000.</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code>fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">InsertOrUpdate</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>T1<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">SetSource</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ExecuteSqlBulkCopy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token keyword">INTO</span> <span class="token comment">#temp_T1 FROM [T1] WHERE 1=2</span>

<span class="token keyword">MERGE</span> <span class="token keyword">INTO</span> <span class="token punctuation">[</span>T1<span class="token punctuation">]</span> t1 <span class="token keyword">USING</span> <span class="token punctuation">(</span><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> <span class="token comment">#temp_user1) t2 ON (t1.[id] = t2.[id])</span>
<span class="token keyword">WHEN</span> <span class="token keyword">MATCHED</span> <span class="token keyword">THEN</span>
  <span class="token keyword">update</span> <span class="token keyword">set</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token keyword">WHEN</span> <span class="token operator">NOT</span> <span class="token keyword">MATCHED</span> <span class="token keyword">THEN</span>
  <span class="token keyword">insert</span> <span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span>
  <span class="token keyword">values</span> <span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">DROP</span> <span class="token keyword">TABLE</span> <span class="token comment">#temp_user1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="_4-table-beginedit" tabindex="-1"><a class="header-anchor" href="#_4-table-beginedit" aria-hidden="true">#</a> 4. Table BeginEdit</h2><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> list <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>T<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span><span class="token range operator">..</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name"><span class="token keyword">var</span></span> repo <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">GetRepository</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>T<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
repo<span class="token punctuation">.</span><span class="token function">BeginEdit</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Start editing list</span>

list<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">T</span> <span class="token punctuation">{</span> Name <span class="token operator">=</span> <span class="token string">&quot;Category2_3&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
list<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>Name <span class="token operator">=</span> <span class="token string">&quot;123123&quot;</span><span class="token punctuation">;</span>
list<span class="token punctuation">.</span><span class="token function">RemoveAt</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

repo<span class="token punctuation">.</span><span class="token function">EndEdit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Overloaded method for new and old comparisons repo.EndEdit(newlist)</span>

<span class="token keyword">class</span> <span class="token class-name">T</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name">Guid</span> Id <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Name <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The <code>EndEdit</code> method above generates 3 SQL statements as follows:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token string">&quot;T&quot;</span><span class="token punctuation">(</span><span class="token string">&quot;Id&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Name&quot;</span><span class="token punctuation">)</span> <span class="token keyword">VALUES</span><span class="token punctuation">(</span><span class="token string">&#39;5f26bf07-6ac3-cbe8-00da-7dd74818c3a6&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Category2_3&#39;</span><span class="token punctuation">)</span>


<span class="token keyword">UPDATE</span> <span class="token string">&quot;T&quot;</span> <span class="token keyword">SET</span> <span class="token string">&quot;Name&quot;</span> <span class="token operator">=</span> <span class="token string">&#39;123123&#39;</span>
<span class="token keyword">WHERE</span> <span class="token punctuation">(</span><span class="token string">&quot;Id&quot;</span> <span class="token operator">=</span> <span class="token string">&#39;5f26bf00-6ac3-cbe8-00da-7dd01be76e26&#39;</span><span class="token punctuation">)</span>


<span class="token keyword">DELETE</span> <span class="token keyword">FROM</span> <span class="token string">&quot;T&quot;</span> <span class="token keyword">WHERE</span> <span class="token punctuation">(</span><span class="token string">&quot;Id&quot;</span> <span class="token operator">=</span> <span class="token string">&#39;5f26bf00-6ac3-cbe8-00da-7dd11bcf54dc&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Scenario: After loading table data in WinForms, perform a series of add, modify, and delete operations, then click [Save].</p><p>Reminder: This operation only affects the variable list and is not intended for full table comparison updates.</p><h2 id="_5-mysql-on-duplicate-key-update" tabindex="-1"><a class="header-anchor" href="#_5-mysql-on-duplicate-key-update" aria-hidden="true">#</a> 5. MySql <code>On Duplicate Key Update</code></h2><p>FreeSql.Provider.MySql and FreeSql.Provider.MySqlConnector support MySql&#39;s unique <code>On Duplicate Key Update</code> functionality to perform insert or update operations (batch supported).</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">class</span> <span class="token class-name">TestInfo</span>
<span class="token punctuation">{</span>
    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Column</span><span class="token attribute-arguments"><span class="token punctuation">(</span>IsIdentity <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> id <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> title <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token return-type class-name">DateTime</span> time <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token class-name"><span class="token keyword">var</span></span> item <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">TestInfo</span> <span class="token punctuation">{</span> id <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">,</span> title <span class="token operator">=</span> <span class="token string">&quot;title-100&quot;</span><span class="token punctuation">,</span> time <span class="token operator">=</span> DateTime<span class="token punctuation">.</span><span class="token function">Parse</span><span class="token punctuation">(</span><span class="token string">&quot;2000-01-01&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
fsql<span class="token punctuation">.</span><span class="token function">Insert</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">NoneParameter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">OnDuplicateKeyUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToSql</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//INSERT INTO \`TestInfo\`(\`id\`, \`title\`, \`time\`) VALUES(100, &#39;title-100&#39;, &#39;2000-01-01 00:00:00.000&#39;)</span>
<span class="token comment">//ON DUPLICATE KEY UPDATE</span>
<span class="token comment">//\`title\` = VALUES(\`title\`), </span>
<span class="token comment">//\`time\` = VALUES(\`time\`)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Methods that can be called after <code>OnDuplicateKeyUpdate()</code>:</p><table><thead><tr><th>Method Name</th><th>Description</th></tr></thead><tbody><tr><td>IgnoreColumns</td><td>Ignore columns to update, similar to <code>IUpdate.IgnoreColumns</code></td></tr><tr><td>UpdateColumns</td><td>Specify columns to update, similar to <code>IUpdate.UpdateColumns</code></td></tr><tr><td>Set</td><td>Manually specify columns to update, similar to <code>IUpdate.Set</code></td></tr><tr><td>SetRaw</td><td>Supplement to the <code>Set</code> method, can pass SQL strings</td></tr><tr><td>ToSql</td><td>Returns the SQL statement to be executed</td></tr><tr><td>ExecuteAffrows</td><td>Executes and returns the number of affected rows</td></tr></tbody></table><p>Both <code>IInsert</code> and <code>OnDuplicateKeyUpdate</code> have <code>IgnoreColumns</code> and <code>UpdateColumns</code> methods.</p><p>When inserting an entity/collection, if the <code>time</code> column is ignored, the code is as follows:</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code>fsql<span class="token punctuation">.</span><span class="token function">Insert</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">IgnoreColumns</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>time<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">NoneParameter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">OnDuplicateKeyUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToSql</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//INSERT INTO \`TestInfo\`(\`id\`, \`title\`) VALUES(200, &#39;title-200&#39;)</span>
<span class="token comment">//ON DUPLICATE KEY UPDATE</span>
<span class="token comment">//\`title\` = VALUES(\`title\`), </span>
<span class="token comment">//\`time\` = &#39;2000-01-01 00:00:00.000&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>We observe that the UPDATE time part becomes a constant, rather than <code>VALUES(\\</code>time\`)\`, as follows:</p><p>When columns exist in the insert part, they are set as <code>VALUES(\\</code>field\`)\` in the update part;</p><p>When columns do not exist in the insert part, they are set as constants in the update part. When operating on entity arrays, this constant is executed with <code>case when ... end</code> (same as <code>IUpdate</code>).</p><hr><h2 id="_6-postgresql-on-conflict-do-update" tabindex="-1"><a class="header-anchor" href="#_6-postgresql-on-conflict-do-update" aria-hidden="true">#</a> 6. PostgreSQL <code>On Conflict Do Update</code></h2><p>FreeSql.Provider.PostgreSQL supports PostgreSQL 9.5+ specific <code>On Conflict(id) Do Update</code> functionality, similar to MySql&#39;s <code>OnDuplicateKeyUpdate</code>.</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">class</span> <span class="token class-name">TestInfo</span> <span class="token punctuation">{</span>
    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Column</span><span class="token attribute-arguments"><span class="token punctuation">(</span>IsIdentity <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> id <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> title <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token return-type class-name">DateTime<span class="token punctuation">?</span></span> time <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token class-name"><span class="token keyword">var</span></span> items <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
    <span class="token keyword">new</span> <span class="token constructor-invocation class-name">TestInfo</span> <span class="token punctuation">{</span> id <span class="token operator">=</span> <span class="token number">200</span><span class="token punctuation">,</span> title <span class="token operator">=</span> <span class="token string">&quot;title-200&quot;</span><span class="token punctuation">,</span> time <span class="token operator">=</span> DateTime<span class="token punctuation">.</span><span class="token function">Parse</span><span class="token punctuation">(</span><span class="token string">&quot;2000-01-01&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token keyword">new</span> <span class="token constructor-invocation class-name">TestInfo</span> <span class="token punctuation">{</span> id <span class="token operator">=</span> <span class="token number">201</span><span class="token punctuation">,</span> title <span class="token operator">=</span> <span class="token string">&quot;title-201&quot;</span><span class="token punctuation">,</span> time <span class="token operator">=</span> DateTime<span class="token punctuation">.</span><span class="token function">Parse</span><span class="token punctuation">(</span><span class="token string">&quot;2000-01-01&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token keyword">new</span> <span class="token constructor-invocation class-name">TestInfo</span> <span class="token punctuation">{</span> id <span class="token operator">=</span> <span class="token number">202</span><span class="token punctuation">,</span> title <span class="token operator">=</span> <span class="token string">&quot;title-202&quot;</span><span class="token punctuation">,</span> time <span class="token operator">=</span> DateTime<span class="token punctuation">.</span><span class="token function">Parse</span><span class="token punctuation">(</span><span class="token string">&quot;2000-01-01&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
fsql<span class="token punctuation">.</span><span class="token function">Insert</span><span class="token punctuation">(</span>items<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">IgnoreColumns</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>time<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">NoneParameter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">OnConflictDoUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToSql</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//INSERT INTO &quot;&quot;TestInfo&quot;&quot;(&quot;&quot;id&quot;&quot;, &quot;&quot;title&quot;&quot;) VALUES(200, &#39;title-200&#39;), (201, &#39;title-201&#39;), (202, &#39;title-202&#39;)</span>
<span class="token comment">//ON CONFLICT(&quot;&quot;id&quot;&quot;) DO UPDATE SET</span>
<span class="token comment">//&quot;&quot;title&quot;&quot; = EXCLUDED.&quot;&quot;title&quot;&quot;,</span>
<span class="token comment">//&quot;&quot;time&quot;&quot; = CASE EXCLUDED.&quot;&quot;id&quot;&quot;</span>
<span class="token comment">//WHEN 200 THEN &#39;2000-01-01 00:00:00.000000&#39;</span>
<span class="token comment">//WHEN 201 THEN &#39;2000-01-01 00:00:00.000000&#39;</span>
<span class="token comment">//WHEN 202 THEN &#39;2000-01-01 00:00:00.000000&#39; END::timestamp</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,39),o=[p];function c(i,l){return s(),a("div",null,o)}const r=n(e,[["render",c],["__file","insert-or-update.html.vue"]]);export{r as default};