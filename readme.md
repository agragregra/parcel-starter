<h1>Parcel Starter</h1>
<p>Lightweight Parcel Starter</p>

<p>
	<img src="https://raw.githubusercontent.com/agragregra/ps/master/src/img/preview.jpg" alt="Parcel Starter">
</p>

<p><strong>Parcel Starter</strong> - lightweight startup environment with <strong>Parcel</strong>, <strong>Preprocessors (Sass, Scss)</strong>, <strong>HTML imports</strong> (posthtml-include), <strong>npm run build</strong>, <strong>imagemin + webp</strong>.</p>

<h2>How to use Parcel Starter</h2>

<p>Clone into the current folder with remove all unnecessary (one command):</p>

<pre>git clone https://github.com/agragregra/ps .; rm -rf trunk .gitignore readme.md .git</pre>

<ol>
	<li>Clone or <a href="https://github.com/agragregra/ps/archive/master.zip">Download</a> <strong>Parcel Starter</strong> from GitHub</li>
	<li>Install Node Modules: <strong>npm i</strong></li>
	<li>Run: <strong>npm start</strong></li>
	<li>Build: <strong>npm run build</strong></li>
</ol>

<h2>Basic rules</h2>

<h4>src's & dist's:</h4>

<ol>
	<li>All <strong>src | dist scripts</strong> located in <strong>src/js/app.js | dist/js/app.js</strong></li>
	<li><strong>Sass|Scss</strong> src files located in <strong>src/styles/</strong></li>
	<li>Project <strong>styles config</strong> placed in <strong>src/styles/_config.sass</strong></li>
	<li>All <strong>compressed styles</strong> located in <strong>dist/css/main.css</strong></li>
	<li>All <strong>src images</strong> placed in <strong>src/img/</strong> folder</li>
	<li>All <strong>compressed images</strong> placed in <strong>dist/img/</strong> folder</li>
</ol>

<h4>Include parts of HTML code:</h4>

<p>Include parts of html code is implemented using posthtml-include. You can import any part of the code using construction in any of html files:</p>

<pre>&lt;include src="parts/component.html" locals='{
	"name": "Ivan Vasilievich",
	"img": "img/first.jpg"
}'&gt;&lt;/include&gt;</pre>

<p>In "src/parts/component.html":</p>

<pre>
Your Name: {{ name }}
Your Photo: &lt;img src="{{ img }}?as=webp"&gt;
</pre>

<h4>Include parts of Preprocessor code:</h4>

<p>All included parts of preprocessor code placed in folder "styles/blocks/*". Any number of Sass/Scss files can be placed here and in any order. They will be automatically included in the "styles/main.sass" file and processed.</p>
