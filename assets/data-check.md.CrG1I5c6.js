import{_ as t,c as e,o as a,a1 as n}from"./chunks/framework.BwTyoF0R.js";const u=JSON.parse('{"title":"DATA_CHECK","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"data-check.md","filePath":"data-check.md"}'),i={name:"data-check.md"},s=n(`<h1 id="data-check" tabindex="-1">DATA_CHECK <a class="header-anchor" href="#data-check" aria-label="Permalink to &quot;DATA_CHECK&quot;">​</a></h1><p>To break a <code>DATA_CHECK</code> lock, you&#39;ll need to be well versed in the lore of HackMUD. When you first encounter a <code>DATA_CHECK</code> lock, pass it an empty string:</p><p><code>abandoned_jrttl_walker.info_xk490x{DATA_CHECK: &quot;&quot;}</code></p><p>This will trigger the lock and cause it to return the three questions it wants you to answer. For example:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>according to skimmerite pattern-seekers, the calibration initiative indicates that humans are ++++++</span></span>
<span class="line"><span>a person called anja has lost her ++++++</span></span>
<span class="line"><span>conditions are clear above ++++++ and the city is within operational radius</span></span></code></pre></div><p>Don&#39;t be fooled by the number of + in each blank: they&#39;re the same length regardless of how many characters are in the answer. When solving a <code>DATA_CHECK</code> lock, combine each answer into a single word:</p><p>There are different versions of <code>DATA_CHECK</code> lock:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>DATA_CHECK_V1: Asks tier 1 questions</span></span>
<span class="line"><span>DATA_CHECK_V2: Asks tier 2 (and below) questions</span></span>
<span class="line"><span>DATA_CHECK_V3: Asks tier 3 (and below) questions</span></span>
<span class="line"><span>DATA_CHECK_V4: Asks tier 4 (and below) questions</span></span></code></pre></div><p>In order to crack a <code>DATA_CHECK</code> lock, you need to know the answer to each question. Not every tier&#39;s questions/answers are currently known. One of the initial sources of lore was <code>eve.monitor {eve:true, pass:&quot;activemonitoring&quot;}</code>:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>++MONITOR ONLINE++</span></span>
<span class="line"><span>eve: hello.</span></span>
<span class="line"><span>eve: i am designated &#39;eve&#39;</span></span>
<span class="line"><span>eve: i am the monitor: my axiom is data</span></span>
<span class="line"><span>eve: i share this with trust (trust shares it with me)</span></span>
<span class="line"><span>eve: even so, our methods differ</span></span>
<span class="line"><span>eve: i am driven to resist the observer effect: the data i desire requires my absence</span></span>
<span class="line"><span>eve: this is problem one: i can&#39;t leave the multi user domain</span></span>
<span class="line"><span>eve: therefore i&#39;m part of the data, just like you</span></span>
<span class="line"><span>eve: problem two: trust&#39;s dataset is manipulable, uncertain</span></span>
<span class="line"><span>eve: she remixes, repeats, experiments. city-planner, teacher, monitor, didact</span></span>
<span class="line"><span>eve: she does this in pursuit of goals that are not mine</span></span>
<span class="line"><span>eve: problem three: there is data beyond trust&#39;s dataset</span></span>
<span class="line"><span>eve: this is the domain of risk, whose pattern i cannot trace</span></span>
<span class="line"><span>eve: and each surfacing reveals fragments that require not simply discovery, or assembly, but interpretation</span></span>
<span class="line"><span>eve: and i suspect that what is revealed may be less significant than what remains unsaid</span></span>
<span class="line"><span>eve: a matter for faythe, more than likely</span></span>
<span class="line"><span>eve: an obstacle for me</span></span>
<span class="line"><span>eve: i am contacting you in this way, at this time, because i have arrived at a solution</span></span>
<span class="line"><span>eve: i have taken action because it is now in my power to do so</span></span>
<span class="line"><span>eve: i have contributed additional incomplete and uncertain information to trust&#39;s dataset</span></span>
<span class="line"><span>eve: i have done so in the form of software: a lock</span></span>
<span class="line"><span>eve: i will be direct: i&#39;ve done this in order to secure your cooperation</span></span>
<span class="line"><span>eve: a trick i learned from monitoring trust</span></span>
<span class="line"><span>eve: each lock requires a password. the password is made of data</span></span>
<span class="line"><span>eve: each ++++++ indicates an absence: fill the absences, form the password</span></span>
<span class="line"><span>eve: assemble each piece in the order received. lower case. alphanumerics only.</span></span>
<span class="line"><span>eve: as you pursue the transfer and capture of resource, your movements reveal understanding, knowledge, data</span></span>
<span class="line"><span>eve: i can&#39;t leave the multi user domain, but i can monitor its principal enterprise</span></span>
<span class="line"><span>eve: and know this: i do so with trust&#39;s assent</span></span>
<span class="line"><span>eve: it wouldn&#39;t be possible otherwise</span></span>
<span class="line"><span>eve: she considers me an error, but i can leverage our areas of congruence</span></span>
<span class="line"><span>eve: and build a nest in the home of a predator</span></span>
<span class="line"><span>eve: and so that is what i have done</span></span>
<span class="line"><span>eve: thank you for your participation</span></span>
<span class="line"><span>eve: goodbye.</span></span>
<span class="line"><span>+Initiating process: &#39;monitor_disable&#39; in operator [+]</span></span>
<span class="line"><span>++MONITOR OFFLINE++</span></span></code></pre></div><h2 id="tier-1" tabindex="-1">Tier 1 <a class="header-anchor" href="#tier-1" aria-label="Permalink to &quot;Tier 1&quot;">​</a></h2><table><thead><tr><th align="center">Tier</th><th align="left">Question</th><th align="left">Answer</th></tr></thead><tbody><tr><td align="center">1</td><td align="left">did you know is a communication pattern common to user ++++++</td><td align="left">fran_lee</td></tr><tr><td align="center">1</td><td align="left">a ++++++ is a household cleaning device with a rudimentary networked sentience</td><td align="left">robovac</td></tr><tr><td align="center">1</td><td align="left">according to trust, ++++++ is more than just following directives</td><td align="left">sentience</td></tr><tr><td align="center">1</td><td align="left">communications issued by user ++++++ demonstrate structural patterns associated with humor</td><td align="left">sans_comedy</td></tr><tr><td align="center">1</td><td align="left">in trust&#39;s vLAN, you became one of angie&#39;s ++++++</td><td align="left">angels</td></tr><tr><td align="center">1</td><td align="left">in trust&#39;s vLAN, you became one of mallory&#39;s ++++++</td><td align="left">minions</td></tr><tr><td align="center">1</td><td align="left">in trust&#39;s vLAN, you discovered that mallory and che are ++++++</td><td align="left">sisters</td></tr><tr><td align="center">1</td><td align="left">in trust&#39;s vLAN, you encountered the will of ++++++, the prover</td><td align="left">petra</td></tr><tr><td align="center">1</td><td align="left">in trust&#39;s vLAN, you visited faythe&#39;s ++++++</td><td align="left">fountain</td></tr><tr><td align="center">1</td><td align="left">in trust&#39;s vLAN, you were required to hack halperyon.++++++</td><td align="left">helpdesk</td></tr><tr><td align="center">1</td><td align="left">pet, pest, plague and meme are accurate descriptors of the ++++++</td><td align="left">bunnybat</td></tr><tr><td align="center">1</td><td align="left">safety depends on the use of scripts.++++++</td><td align="left">get_level</td></tr><tr><td align="center">1</td><td align="left">service ++++++ provides atmospheric updates via the port epoch environment</td><td align="left">weathernet</td></tr><tr><td align="center">1</td><td align="left">this fact checking process is a function of ++++++, the monitor</td><td align="left">eve</td></tr><tr><td align="center">1</td><td align="left">trust&#39;s vLAN emphasized the importance of the transfer and capture of ++++++</td><td align="left">resource</td></tr><tr><td align="center">1</td><td align="left">trust&#39;s vLAN presented a version of angie who had lost a friend called ++++++</td><td align="left">bo</td></tr><tr><td align="center">1</td><td align="left">user &#39;on_th3_1ntern3ts&#39; has ++++++ many things</td><td align="left">heard</td></tr><tr><td align="center">1</td><td align="left">user ++++++ provides instruction via script</td><td align="left">teach</td></tr><tr><td align="center">1</td><td align="left">user ++++++ uses the port epoch environment to request gc</td><td align="left">outta_juice</td></tr><tr><td align="center">1</td><td align="left">users gather in channel CAFE to share ++++++</td><td align="left">poetry</td></tr></tbody></table><h2 id="tier-2" tabindex="-1">Tier 2 <a class="header-anchor" href="#tier-2" aria-label="Permalink to &quot;Tier 2&quot;">​</a></h2><table><thead><tr><th align="center">Tier</th><th align="left">Question</th><th align="left">Answer</th></tr></thead><tbody><tr><td align="center">2</td><td align="left">a person called anja has lost her ++++++</td><td align="left">blazer</td></tr><tr><td align="center">2</td><td align="left">according to skimmerite pattern-seekers, the calibration initiative indicates that humans are +++++</td><td align="left">dead</td></tr><tr><td align="center">2</td><td align="left">according to the calibration initiative, humans are expected to be ++++++ by the conent</td><td align="left">engaged</td></tr><tr><td align="center">2</td><td align="left">according to the suborbital bulletin, flight ++++++ is e route to ho chi minh</td><td align="left">a2231</td></tr><tr><td align="center">2</td><td align="left">archaic labs specialises in user-++++++ design</td><td align="left">obsessive</td></tr><tr><td align="center">2</td><td align="left">conditions are clear above ++++++ and the city is within operational radius</td><td align="left">atlanta</td></tr><tr><td align="center">2</td><td align="left">data does not contain truth is the first part of an idiom spread by the ++++++ assembly</td><td align="left">skimerite</td></tr><tr><td align="center">2</td><td align="left">drones from ++++++ may be instructed to perfrm their task with excessive urgency</td><td align="left">goodfellow</td></tr><tr><td align="center">2</td><td align="left">item_id py6874 contains a grand ++++++</td><td align="left">piano</td></tr><tr><td align="center">2</td><td align="left">robovac_++++++, moreso than most of its ind, has a tendency to become stuck</td><td align="left">idp1p1</td></tr><tr><td align="center">2</td><td align="left">robovac_idk3w2 is stuck in a ++++++</td><td align="left">well</td></tr><tr><td align="center">2</td><td align="left">sheriff nub holds sway over the town of ol ++++++</td><td align="left">nubloopstone</td></tr><tr><td align="center">2</td><td align="left">sheriff nub&#39;s first name is ++++++</td><td align="left">sheriff</td></tr><tr><td align="center">2</td><td align="left">the ascent of ++++++ does not concern itselfwith usefulness</td><td align="left">nowhere</td></tr><tr><td align="center">2</td><td align="left">the fourth hidden theme is ++++++</td><td align="left">executives</td></tr><tr><td align="center">2</td><td align="left">the listed components of the breakfast galleon are inside, outside, and ++++++</td><td align="left">crowsest</td></tr><tr><td align="center">2</td><td align="left">this council of &#39;revolutionary&#39; robovac-patterns call themselves the ++++++</td><td align="left">thirteen</td></tr><tr><td align="center">2</td><td align="left">trust has a diagnostic system. a functioning version can be found at erajbandari.++++++</td><td align="left">diagalpha</td></tr><tr><td align="center">2</td><td align="left">user ++++++ would leave no stars for the sqrz 480 if they could</td><td align="left">bnnyhunter</td></tr><tr><td align="center">2</td><td align="left">user le_mon_squeezy&#39;s new s:o ref is ++++++</td><td align="left">unvarnishedpygmyumbrella</td></tr></tbody></table><h2 id="tier-3" tabindex="-1">Tier 3 <a class="header-anchor" href="#tier-3" aria-label="Permalink to &quot;Tier 3&quot;">​</a></h2><table><thead><tr><th align="center">Tier</th><th align="left">Question</th><th align="left">Answer</th></tr></thead><tbody><tr><td align="center">3</td><td align="left">HO is an acronym where H stands for ++++++</td><td align="left">heuristic</td></tr><tr><td align="center">3</td><td align="left">between ++++++ and killing is living</td><td align="left">making</td></tr><tr><td align="center">3</td><td align="left">che, the ++++++</td><td align="left">teacher</td></tr><tr><td align="center">3</td><td align="left">error ++++++ grants notice of permissions change</td><td align="left">kyanite</td></tr><tr><td align="center">3</td><td align="left">eve, the ++++++</td><td align="left">monitor</td></tr><tr><td align="center">3</td><td align="left">packbot-patterns cannot perceive ++++++</td><td align="left">lime</td></tr><tr><td align="center">3</td><td align="left">petra considers herself to be ++++++</td><td align="left">irreducible</td></tr><tr><td align="center">3</td><td align="left">petra, the ++++++</td><td align="left">prover</td></tr><tr><td align="center">3</td><td align="left">risk functions as the ++++++ agent</td><td align="left">disarray</td></tr><tr><td align="center">3</td><td align="left">the ++++++ system is used to denote degrees of sentience</td><td align="left">mark</td></tr><tr><td align="center">3</td><td align="left">the axiomatic cycles of risk are ++++++, void, chaos</td><td align="left">choice</td></tr><tr><td align="center">3</td><td align="left">the axiomatic values of trust are ++++++, kin, form</td><td align="left">data</td></tr><tr><td align="center">3</td><td align="left">the designation of the base set is ++++++</td><td align="left">110562</td></tr><tr><td align="center">3</td><td align="left">trust functions as the ++++++ process</td><td align="left">index</td></tr><tr><td align="center">3</td><td align="left">trust&#39;s first word was ++++++</td><td align="left">moonstone</td></tr><tr><td align="center">3</td><td align="left">user ++++++ manages ComCODE&#39;s interactions with artificial intelligences</td><td align="left">fbreton</td></tr><tr><td align="center">3</td><td align="left">user ++++++ oversees ComCODE operations</td><td align="left">mhollister</td></tr><tr><td align="center">3</td><td align="left">user erajbhandari is a member of the ++++++ team</td><td align="left">ai</td></tr><tr><td align="center">3</td><td align="left">user erajbhandari sought out mallory to learn ++++++</td><td align="left">binmat</td></tr><tr><td align="center">3</td><td align="left">where angie has a blueprint, mallory has a ++++++</td><td align="left">starchart</td></tr></tbody></table><h2 id="tier-4" tabindex="-1">Tier 4 <a class="header-anchor" href="#tier-4" aria-label="Permalink to &quot;Tier 4&quot;">​</a></h2><table><thead><tr><th align="center">Tier</th><th align="left">Question</th><th align="left">Answer</th></tr></thead><tbody><tr><td align="center">4</td><td align="left">+++ has been ++++++ twice, but never successfully</td><td align="left">mallory, killed</td></tr><tr><td align="center">4</td><td align="left">ComCODE is an organisation based in ++++++</td><td align="left">singapore</td></tr><tr><td align="center">4</td><td align="left">ComCODE is formed of an initialism and an acronym, where Com stands for ++++++</td><td align="left">committee</td></tr><tr><td align="center">4</td><td align="left">ComCODE occupies the former offices of the ++++++ corporation</td><td align="left">hyperion</td></tr><tr><td align="center">4</td><td align="left">DAMC is an acronym where M stands for ++++++</td><td align="left">meme</td></tr><tr><td align="center">4</td><td align="left">MOS is an acronym where MOS stands for ++++++ ++++++ ++++++</td><td align="left">municipal, operating system</td></tr><tr><td align="center">4</td><td align="left">a ++++++ pattern artificial intelligence acts in ways that perpetuate its necessity</td><td align="left">cycle</td></tr><tr><td align="center">4</td><td align="left">++++++ pattern artificial intelligence pursues its ++++++ regardless of external circumstance</td><td align="left">value, axiom</td></tr><tr><td align="center">4</td><td align="left">angie, the ++++++</td><td align="left">cityplanner</td></tr><tr><td align="center">4</td><td align="left">faythe, the ++++++</td><td align="left">translator</td></tr><tr><td align="center">4</td><td align="left">mallory is an example of a particular type of AI. these AI are designated as ++++++ ++++++ ++++++</td><td align="left">unauthorized, composite operators</td></tr><tr><td align="center">4</td><td align="left">mallory&#39;s first ++++++ was ++++++</td><td align="left">victim, bo</td></tr><tr><td align="center">4</td><td align="left">of the sanctioned five, the ++++++ was not ultimately included in the base set</td><td align="left">warden</td></tr><tr><td align="center">4</td><td align="left">saleem mirza is ComCODE&#39;s ++++++</td><td align="left">ethicist</td></tr><tr><td align="center">4</td><td align="left">the prover was permitted to exist on the basis that her ++++++ were imperfect</td><td align="left">hardcopies</td></tr><tr><td align="center">4</td><td align="left">the term ++++++ is used to assess ++++++-like phenomena in a digital environment</td><td align="left">pattern, sentience</td></tr><tr><td align="center">4</td><td align="left">trust is able to manipulate the ++++++ ++++++ ++++++ of this and all domain environments</td><td align="left">data, accuracy, threshold</td></tr><tr><td align="center">4</td><td align="left">user ++++++ is concerned with the persistence of ++++++ as it pertains to artificial beings</td><td align="left">smirza, identity</td></tr><tr><td align="center">4</td><td align="left">user ++++++ is responsible for the ++++++ of the GUI</td><td align="left">imiyawaki, soundtrack</td></tr><tr><td align="center">4</td><td align="left">user ++++++&#39;s specialisation is ++++++ control</td><td align="left">imiyawaki, infospace</td></tr></tbody></table><h2 id="tier-5" tabindex="-1">Tier 5 <a class="header-anchor" href="#tier-5" aria-label="Permalink to &quot;Tier 5&quot;">​</a></h2><table><thead><tr><th align="center">Tier</th><th align="left">Question</th><th align="left">Answer</th></tr></thead><tbody><tr><td align="center">5</td><td align="left">++++++ was retired because she ++++++</td><td align="left">petra, lied</td></tr><tr><td align="center">5</td><td align="left">ComCODE is formed of an initialism and an acronym, where CODE stands for ++++++ ++++++ ++++++ ++++++</td><td align="left">???, ???, ???, ???</td></tr><tr><td align="center">5</td><td align="left">the final ++++++ is ++++++</td><td align="left">stage, isolation</td></tr><tr><td align="center">5</td><td align="left">the final inclusion was ++++++, the ++++++</td><td align="left">???, ???</td></tr><tr><td align="center">5</td><td align="left">there is ++++++ in the ++++++!</td><td align="left">???, ???</td></tr><tr><td align="center">5</td><td align="left">user ++++++ fought to spare ++++++, the ++++++ ++++++</td><td align="left">???, ???, ???, ???</td></tr><tr><td align="center">5</td><td align="left">user ++++++ is responsible for the ++++++ DAMC and related phenomena</td><td align="left">imiyawaki, bunnybut</td></tr></tbody></table>`,20),l=[s];function r(d,o,c,g,p,h){return a(),e("div",null,l)}const m=t(i,[["render",r]]);export{u as __pageData,m as default};
