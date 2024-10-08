import{_ as n,c as a,o as p,a1 as s,j as e}from"./chunks/framework.BwTyoF0R.js";const v=JSON.parse('{"title":"Tier 4","description":"","frontmatter":{"prev":{"text":"Tier 3","link":"/tier-3"},"outline":false},"headers":[],"relativePath":"tier-4.md","filePath":"tier-4.md"}'),l={name:"tier-4.md"},i=s(`<h1 id="tier-4" tabindex="-1">Tier 4 <a class="header-anchor" href="#tier-4" aria-label="Permalink to &quot;Tier 4&quot;">​</a></h1><p><em>Work in Progress</em></p><p>First things first, before you start ensure that your user has no GC on them, or it will be lost.</p><p>Tier 4 involves accessing the <strong>Gibson Hypercluster</strong>, which is found in NULLSEC. Your loc will be revealed as a result, so ensure you&#39;re using a user that is either well-secured, or expendable.</p><p>There are six available clusters, and not all clusters may be open when you discover them. The shift/refresh on these are variable, and can range from hours to days.</p><ul><li>gibson.hypercluster_a</li><li>gibson.hypercluster_b</li><li>gibson.hypercluster_c</li><li>gibson.hypercluster_d</li><li>gibson.hypercluster_e</li><li>gibson.hypercluster_f</li></ul><p>In order to breach the clusters, you will need to provide multiple arguments, of which the key components cycle as well as the value, e.g.</p><p><strong>username argument</strong></p><ul><li>Possible keys: <code>auth, authenticate, a, login, authentication</code></li><li>Possible values: <code>ad, root, gibson, sys, admin, boot, system, user, superuser</code></li></ul><p><strong>password argument</strong></p><ul><li>Possible keys: <code>password, p, pass</code></li><li>Possible values: <code>welcome, god, password, secret, qwerty, rosebud, hacking, planet</code></li></ul><p><strong>action argument</strong></p><ul><li>Possible keys: <code>command, cmd, entry, open, process, action, get, see, navigation, show, nav, access</code></li><li>Required value: <code>eden_kolekcja</code></li></ul><p><em>Please note these lists are not exhaustive.</em></p><p>You will need to try combinations of <code>username</code> key/value pairs, until you receive a response that requests a <code>password</code> . Next, try combination of the <code>password</code> key/value pairs, until you receive a response that includes the word <code>access</code>. Now, you need to try each <code>action</code> key with the value above until your response no longer includes the word <code>access</code>.</p><p>At this point, you will now have access to the <code>data_bank</code>. You will see a large list of numbers and alphanumeric codes, separated by double spaces and line breaks, with a specific keyword on the first line (fourth word). We may encounter corruption, so run the command again (or decorrupt with a script) to collect the full set.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>open data with info</span></span>
<span class="line"><span>9vmkgcz  23Á64708Ã  780aee864  7jjljj  </span></span>
<span class="line"><span>8xk7mv9  4500111708  388c750f5  14wvy4d  </span></span>
<span class="line"><span>111201761  3738717355  jdnfat  385a79e2  </span></span>
<span class="line"><span>12usxcg  32500505133  22731673235  21204101225  </span></span>
<span class="line"><span>2dcda3e  4bccbb37  27020320466  5x5fh¦s  </span></span>
<span class="line"><span>41034201266  e76ed527  188469767¤ f76d8c6b  </span></span>
<span class="line"><span>340411277354  11357576225  8092e5u  200376706003  </span></span>
<span class="line"><span>etv90qk  klfrÁr  10782996140  8e4e0fa2  </span></span>
<span class="line"><span>by1qjle© 5zw7lxn  341250542562¦ 33337056614  </span></span>
<span class="line"><span>17408533858  2j1do1  175067855  pdil7m  </span></span>
<span class="line"><span>xty12u  41775123012  1t3Ãbkk  9e2df8b4  </span></span>
<span class="line"><span>33ae8141  2467121132  10d63697c  329bcjj  </span></span>
<span class="line"><span>5a75db54  3655259058  17430065335  300361637520  </span></span>
<span class="line"><span>ª06058809  dxho227  361111665106  340051ª11672  </span></span>
<span class="line"><span>60200737206  f23a7579  15235614965  360160357667  </span></span>
<span class="line"><span>20266761273  1yxwnck  1hkduki  3093029232  </span></span>
<span class="line"><span>16243ecb  u9jn0t  17313797905  88cceb31  </span></span>
<span class="line"><span>25889580207  1936941411  21514743024  ced9b714  </span></span>
<span class="line"><span>3832248978  22blntl  485692696  301244305Á0¨  </span></span>
<span class="line"><span>axmcf03  2ca58ddd  15125646510  4043360714  </span></span>
<span class="line"><span>60120070564  8wx3zqk  149730021¨ dtk1wpi  </span></span>
<span class="line"><span>7zwoqpq ¡80dhvop  257532§584  5894aªb94  </span></span>
<span class="line"><span>2072f87©  6547172507  1l2l9zb  1hitv5w  </span></span>
<span class="line"><span>160546466536  120532034735  8761941046  5006e361f  </span></span>
<span class="line"><span>140253000536  27702551771  2037702043  Ã60536137105  </span></span>
<span class="line"><span>cz9fkd  cv4i0ww  19337027121  evnnnÃp  </span></span>
<span class="line"><span>9yktrts  6016661251  73ªf8435  27945472299  </span></span>
<span class="line"><span>dec20e18  215ª9092544  d4ed13e8  307c8e031  </span></span>
<span class="line"><span>5772043427  161657753147  41335677006  33e45e5b  </span></span>
<span class="line"><span>25073634214  9h4i67  344041Á5410  480ce7750  </span></span>
<span class="line"><span>686c5e4ad  7a3edfa0  5z3yyx4  78ae6f3bb  </span></span>
<span class="line"><span>605465578  28023795188  15234327897  23689322493  </span></span>
<span class="line"><span>2807e0a17  241123336440  3391495093  26qd0i  </span></span>
<span class="line"><span>13343124714  30421035  5173410677  200700667127  </span></span>
<span class="line"><span>13110277940  7153460606  276460377  1943v15§ </span></span>
<span class="line"><span>4zdtyav  20a0e8667  5747770454  78b015758  </span></span>
<span class="line"><span>385f90f78  2361629549  25896085233  e32e3a07  </span></span>
<span class="line"><span>6865c3d86  11ut6jx  3720405433  30052135177¨  </span></span>
<span class="line"><span>13xpzi2  1837444861  2145565017  15241948153  </span></span>
<span class="line"><span>1901101048  585706f1b  xdindq  4100077473  </span></span>
<span class="line"><span>101455¦73472  61725635551  §0e3f7f79  21400566¢44  </span></span>
<span class="line"><span>361015457254  7bw3u4  4507423511  8ydf176  </span></span>
<span class="line"><span>743509534  20732034770  536050067  8710509454  </span></span>
<span class="line"><span>8c256c28  2301971272  48e0e46e2  300643407053  </span></span>
<span class="line"><span>6515616703  594917211  320441614567  ztuye7  </span></span>
<span class="line"><span>201315303730  ad0e104  61101661342  cxxiivv  </span></span>
<span class="line"><span>391bc970  126352651  320341425744  1999785553  </span></span>
<span class="line"><span>6336e6ff  18dd778fc  1019897868  381f916bb  </span></span>
<span class="line"><span>26160464053¦  58d6732ce  111Ã6771527  22h09sc  </span></span>
<span class="line"><span>263317347  g6nasy  739c19ca  9y9sak9  </span></span>
<span class="line"><span>21ajc2s  276§043577  100774165564  257213454  </span></span>
<span class="line"><span>361030103171  1075615153  awzmoxd  4¦20893059  </span></span>
<span class="line"><span>74aa5b72  mym4rr  3ykpvrd  100653253703  </span></span>
<span class="line"><span>8834594213  300crga  27045435617  35c30b4c  </span></span>
<span class="line"><span>70a4a2ae8  413c7f80  1Ã950290189  3361bb77  </span></span>
<span class="line"><span>50n8Ájc  7znkmh1  12931443132  2453037330¦  </span></span>
<span class="line"><span>2069130468  vqls7s  6y1q653  tp57cm  </span></span>
<span class="line"><span>700dbf383  1872f0aef  78ff45154  30160635  </span></span>
<span class="line"><span>5024425435  221222453334  82¤46c06  405f199e9  </span></span>
<span class="line"><span>ad2b252b  1136623174  s0Ãsyz  l5wgm  </span></span>
<span class="line"><span>30211977224  4026027443  544454330  13472267542 ¢</span></span>
<span class="line"><span>10ex2uy  50c6705da  1hyj30y  28¦4d670b  </span></span>
<span class="line"><span>17730755250  184447097  70d¢f1542  10f88ac35  </span></span>
<span class="line"><span>261027115306  4009¢4ee  40df9832f  2zbw4o9  </span></span>
<span class="line"><span>scso8t  aydc19Ã  8790098916  631326469  </span></span>
<span class="line"><span>686903b0d  30282510689  947021910  2636249435  </span></span>
<span class="line"><span>euum7ph  3862891144  bug5t9a  51uee0f  </span></span>
<span class="line"><span>6yyqz90  1ru7rkq  ¨v5q6ai  eb62d10  </span></span>
<span class="line"><span>150064330  3383307077  240340522222  lxebvp  </span></span>
<span class="line"><span>206383803  10047054257  1m8ew7p  60qykzc  </span></span>
<span class="line"><span>1iqh59o  708c2e1db  13767440152  870689015¨  </span></span>
<span class="line"><span>90008901  711knge  uyraci  48a621f94  </span></span>
<span class="line"><span>17410300134  288c731a8  1009890¢20  35017567271  </span></span>
<span class="line"><span>21176322601  9xrrq9o  3433207167  awwhy44  </span></span>
<span class="line"><span>745496408  bx8e9n9  1g3rdcs  261214410145  </span></span>
<span class="line"><span>1m1zdnw  3702464756  502562b34  4546013513  </span></span>
<span class="line"><span>31256025717  FF023GARBAG99EAF  24566764731  1705455713  </span></span>
<span class="line"><span>5zgqw78  1lc56ef  6202717421  120560524412  </span></span>
<span class="line"><span>lncphb  293883929  1054e6343¦ 1783181327  </span></span>
<span class="line"><span>79b636b  ¨20231704172  5ycl3m7  zoqgao  </span></span>
<span class="line"><span>23771699612  16050736616  28034617905  78b69e153  </span></span>
<span class="line"><span>12hdzm3  8xi1¢qo  23639572695  3z7987v  </span></span>
<span class="line"><span>cuimuf9  5661705762  mu1z0p  121631135472  </span></span>
<span class="line"><span>321754456236  201353214510  61100323641  307283113  </span></span>
<span class="line"><span>2305223040  17438240282  17mnmau  28003ea8c  </span></span>
<span class="line"><span>424132575  50c¦2e987  836820383  27968612738  </span></span>
<span class="line"><span>2300500773  28155453913  300636333607  15127133174  </span></span>
<span class="line"><span>361470762456  1kzrta3  30150433382  iizyrn  </span></span>
<span class="line"><span>8799003533  221447410011  40756240217  16wlonp  </span></span>
<span class="line"><span>1ycb79g  dupa6ru  260226351607  140146776164  </span></span>
<span class="line"><span>8e34eaa2  21610589733  4§b168e6b  223d3d¦0  </span></span>
<span class="line"><span>32404546534  1b1dd6b5  1Ã39x3f  5862241f  </span></span>
<span class="line"><span>68cc7752e  305f1bfff  1743137777  40xpn05  </span></span>
<span class="line"><span>277689025  261230647¢36  6700448287  3861c4387  </span></span>
<span class="line"><span>2946562040  9a1c2ba2  300712535725  51sj7jm  </span></span>
<span class="line"><span>14d29c1  165617177  300136377400  2§1345775031  </span></span>
<span class="line"><span>25815801177  60c5la8  30dxdaa  301560000574  </span></span>
<span class="line"><span>20wceqh  15673415603  1418711492  1366085752  </span></span>
<span class="line"><span>1lbv80s  32klsa0  10977947860  361703565041  </span></span>
<span class="line"><span>2407673454  d7483eb¡¡ 261202230  2720483811  </span></span>
<span class="line"><span>bwha8py  20234671167  10775044820  28036752647  </span></span>
<span class="line"><span>30086314259  161445616117  30e1fe55b  32004100013  </span></span>
<span class="line"><span>919603373¦ 3316935586  2313652965 ªrugcÁa  </span></span>
<span class="line"><span>1w5vwxq  2391660529  340635422172  46c8b0a3  </span></span>
<span class="line"><span>8xzqboq  6ysktz6¤ 3422137626  be29550  </span></span>
<span class="line"><span>2412165Á3630  d2¡e88c5  86a2239  10837042234  </span></span>
<span class="line"><span>27207531313  461¢59fd  zmf69u  c995a238  </span></span>
<span class="line"><span>20bde29de  3802796660  3470111316  1lizjrg  </span></span>
<span class="line"><span>7414067325  8738422289  60071500042  240531415163  </span></span>
<span class="line"><span>1k6uv6w  22704774643  341410044650  b0f22bd5  </span></span>
<span class="line"><span>41073574432  23709841716  221262774615  641149338  </span></span>
<span class="line"><span>18f68ce01  131715512  15181059920  20jp38b  </span></span>
<span class="line"><span>3066816612  32322003202  101641550374  25610704147  </span></span>
<span class="line"><span>221043403020  17001720244  2260753253  30454d0a2  </span></span>
<span class="line"><span>14764455715</span></span></code></pre></div><p>Feeding this keyword and each value into your original call (e.g. with your username, password, action, etc.) will reveal a data object:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>{</span></span>
<span class="line"><span>	data: &quot;6531998086&quot;,</span></span>
<span class="line"><span>	i: 3,</span></span>
<span class="line"><span>	x: 9.228470785237,</span></span>
<span class="line"><span>	y: &quot;-51.721654026549714&quot;,</span></span>
<span class="line"><span>	z: 448.80500365584749</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>There should be multiples of each index (i), with i ranging from 0 to 26. If we plot the coordinates on a 3d graph, for the first 16 indices (0-15) we&#39;ll get a segment of a parabolic curve, e.g.</p><p>curve1.png &amp;&amp; curve2.png</p><p>For i = 16 to 26 we get (apparent) noise.</p><p>If we calculate out the root coordinates (where z = 0) for each parabola, we get real world locations using GPS coordinates. For example:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>i:2</span></span>
<span class="line"><span>    -25.412680861593568,</span></span>
<span class="line"><span>    28.25461586159355</span></span>
<span class="line"><span>    Church in Hammanskraal, South Africa</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    58.01957799999991,</span></span>
<span class="line"><span>    -25.75344999999992</span></span>
<span class="line"><span>    Ocean</span></span></code></pre></div><p>With this, we can deduce that the Ocean would be the launch point, and the Church in SA would be the destination/target. If we continue:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>i:4</span></span>
<span class="line"><span>    37.263056000001264</span></span>
<span class="line"><span>    -115.79301999987547</span></span>
<span class="line"><span>    Groom Lake, Nevada</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    39.64075782902417</span></span>
<span class="line"><span>    117.69013417084352</span></span>
<span class="line"><span>    Yutian County, Hebei, Tangshan, Hebei, China</span></span>
<span class="line"><span></span></span>
<span class="line"><span>i:14</span></span>
<span class="line"><span>    41.4545640000031</span></span>
<span class="line"><span>    -104.5788569999645</span></span>
<span class="line"><span>    Laramie County School District 02, WY </span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    51.89109959452012</span></span>
<span class="line"><span>    15.033861405420794</span></span>
<span class="line"><span>    Gmina Bobrowice, Poland</span></span>
<span class="line"><span></span></span>
<span class="line"><span>i:7</span></span>
<span class="line"><span>    34.36538199609998</span></span>
<span class="line"><span>    -117.55683299609996</span></span>
<span class="line"><span>    Snowline Joint Unified School District, CA</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    79.42093799999998</span></span>
<span class="line"><span>    -45.719591000000065</span></span>
<span class="line"><span>    Sermersooq Municipality, Greenland</span></span>
<span class="line"><span></span></span>
<span class="line"><span>i:1</span></span>
<span class="line"><span>    35.04252059292308,</span></span>
<span class="line"><span>    141.33867240713744</span></span>
<span class="line"><span>    Ocean</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    38.588699000000936,</span></span>
<span class="line"><span>    -100.37658700006341</span></span>
<span class="line"><span>    Nowhere in Kansas</span></span></code></pre></div><p>Now we identify the best &quot;target&quot; (i.e. the one that would do the most damage), and we convert the i to hexadecimal, and we have the launch code for that cluster. Repeat for the others, and we&#39;ll have all six launch codes.</p><p>[ work in progress ]</p><p>For ease of solving, the following was found in a garbage cluster, giving a hint to where to enter the codes (as the script is hidden, and not in a sector):</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>{ </span></span>
<span class="line"><span>	&quot;data&quot; : &quot;FF023GARBAG99EAF&quot;, </span></span>
<span class="line"><span>	&quot;msg&quot; : &quot;- .... . -.-- / .- .-. . / --- -. / - --- / -- . .-.-.- / --. . - / - .... . / .-.. .- ..- -. -.-. .... / -.-. --- -.. . ... / .. -. - --- / --. .. -... ... --- -. .-.-.- .-.. .- ..- -. -.-. ....&quot; </span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>THEY ARE ON TO ME. GET THE LAUNCH CODES INTO GIBSON.LAUNCH</span></span></code></pre></div><p>So let&#39;s assume we&#39;ve gone through each cluster, discovered the login, pulled the databank, solved our parabolas, and found our idea target index:</p><ul><li>Target for a: c Cairo</li><li>Target for b: 3 LA</li><li>Target for c: Unable to get Logins</li><li>Target for d: Unable to get Logins</li><li>Target for e: 0 Mumbai</li><li>Target for f: a Rio de Janeiro</li></ul><h3 id="final-steps" tabindex="-1">Final Steps <a class="header-anchor" href="#final-steps" aria-label="Permalink to &quot;Final Steps&quot;">​</a></h3><p>Once you have the launch codes, you will enter them into <code>gibson.launch</code> as arguments, at which point you will receive the following message, and any T4 locs - both player and NPC. If you want to try and implement a brute force approach, note that <code>gibson.launch</code> is protected by FMCL, and will only accept one guess per script execution.</p><p>Since we were unable to get targets for c &amp; d above, we will have to brute force the guesses. Since the codes are hexadecimal, we know they are limited from 0-9, a-f. With two codes unknown, our worst case scenario is 256 possible permutations.</p><p><code>&gt; gibson.launch {codes: [&quot;c&quot;,&quot;3&quot;,&quot;d&quot;,&quot;9&quot;,&quot;0&quot;,&quot;a&quot;]}</code></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Launch codes accepted.</span></span>
<span class="line"><span>Additional data:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>rand.p_n1w9jn</span></span>
<span class="line"><span></span></span>
<span class="line"><span>derelict_prwlf_vcgd4g.pub_info_nu5lbr</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>cityplanner.access_uxlapd</span></span>
<span class="line"><span>abndnd_prwlf_5ai7sr.pub_fa2eyo</span></span>
<span class="line"><span>api.pubinfo_p38vww</span></span></code></pre></div><p>Note at this point you will still need to have the NPC locs in order to breach them, and manually retrieve the GC and upgrades they contain.</p>`,38),c=e("hr",{noshade:""},null,-1),t=s(`<h3 id="lore" tabindex="-1">Lore <a class="header-anchor" href="#lore" aria-label="Permalink to &quot;Lore&quot;">​</a></h3><p>The following is included for reference:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>eve.monitor {angie:true,pass:&quot;resistanceandchange&quot;}</span></span>
<span class="line"><span>eve.monitor {bigbot:true, pass:&quot;thisuncivilrule&quot;}</span></span>
<span class="line"><span>eve.monitor {chela:true, pass:&quot;communitypillar&quot;}</span></span>
<span class="line"><span>eve.monitor {eve:true, pass:&quot;activemonitoring&quot;}</span></span>
<span class="line"><span>eve.monitor {faythe:true, pass:&quot;1605&quot;}</span></span>
<span class="line"><span>eve.monitor {mallory:true, pass:&quot;salvationtroll&quot;}</span></span>
<span class="line"><span>eve.monitor {petra:true, pass:&quot;subjectobject&quot;}</span></span>
<span class="line"><span>eve.monitor {risk:true, password:&quot;thewindandtherain&quot;}</span></span>
<span class="line"><span>eve.monitor {trust:true, pass:&quot;caughtintheact&quot;}</span></span>
<span class="line"><span>eve.monitor {walter:true, pass:&quot;comingconflict&quot;}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>erajbhandari.diagalpha {code:&quot;moonstone&quot;, auth:&quot;FXRCzm9B93625KqQXa&quot;, extend:true}</span></span></code></pre></div>`,3),o=[i,c,t];function r(d,u,h,b,g,m){return p(),a("div",null,o)}const w=n(l,[["render",r]]);export{v as __pageData,w as default};
