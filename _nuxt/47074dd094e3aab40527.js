(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{165:function(e,t){const o={render:function(){this.$createElement;return this._self._c,this._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"content"},[o("p",[e._v("The Quantum Music Composer application enables a user to compose music that is performed by a quantum computer or quantum simulator. The musical "),o("em",[e._v("composition")]),e._v(" consists of a series of quantum circuits. Each quantum musical tone "),o("a",{attrs:{href:"#references"}},[e._v("[1]")]),e._v(" in the "),o("em",[e._v("performance")]),e._v(" of a composition is a quantum state, which when measured, results in a pitch determined by quantum mechanical behavior. This normally results in unique melodies and harmonies each time a given composition is performed by a quantum computer or simulator. Fig. 1 contains a musical score captured from one such performance.")]),e._v(" "),o("h2",{attrs:{id:"creating-a-quantum-musical-composition"}},[e._v("Creating a quantum musical composition")]),e._v(" "),o("p",[e._v("To create a quantum musical composition, the user first supplies the desired probabilities for a given pitch to follow another given pitch "),o("em",[e._v("melodically")]),e._v(". Take a moment to examine the music score in Fig. 1 and notice that the staff labeled "),o("strong",[e._v("Melody")]),e._v(" contains an eight-note melody. Please also realize that the staff labeled "),o("strong",[e._v("Harmony")]),e._v(" actually contains seven four-note melodies.  Users enter their desired probabilities into the "),o("a",{attrs:{href:"https://en.wikipedia.org/wiki/Doubly_stochastic_matrix",target:"_blank",rel:"noopener"}},[e._v("doubly-stochastic matrix")]),e._v(" located on the left side of the "),o("strong",[e._v("MELODY MATRICES")]),e._v(" tab.")]),e._v(" "),o("p",[e._v("Clicking the "),o("strong",[e._v("Optimize Rotations")]),e._v(" button updates the "),o("a",{attrs:{href:"https://en.wikipedia.org/wiki/Orthogonal_matrix",target:"_blank",rel:"noopener"}},[e._v("orthogonal matrix")]),e._v(" on the right to contain values, that when squared, comprise a "),o("a",{attrs:{href:"https://en.wikipedia.org/wiki/Unistochastic_matrix",target:"_blank",rel:"noopener"}},[e._v("unistochastic matrix")]),e._v(" that approximates the user's desired probabilities. Deselecting and selecting the "),o("strong",[e._v("Show Probabilities")]),e._v(" checkbox toggles between showing the orthogonal matrix and the unistochastic matrix, respectively. The application optimizes the unistochastic matrix by gradually changing the angles of the six degree-of-freedom rotations in four-dimensional vector space until the difference between the doubly-stochastic matrix and the unistochastic matrix is minimized.  You can experiment with the effects of each rotation on the matrix on the right by using the sliders in the "),o("strong",[e._v("Degree of Freedom Rotations")]),e._v(" region of this tab. Each slider has the range "),o("img",{attrs:{src:"docimages/eqn_range_0_pi2.gif",alt:"eqn_range_0_pi2"}}),e._v(" radians.")]),e._v(" "),o("p",[e._v("To continue creating the quantum musical composition, the user supplies the desired probabilities for a given pitch to be played "),o("em",[e._v("harmonically")]),e._v(" with another given pitch. Take another moment to examine the musical score in Fig. 1 and notice that each of the notes in the staff labeled "),o("strong",[e._v("Melody")]),e._v(" have a note in the staff labeled "),o("strong",[e._v("Harmony")]),e._v(" directly above it. Users enter their desired probabilities into the "),o("a",{attrs:{href:"https://en.wikipedia.org/wiki/Doubly_stochastic_matrix",target:"_blank",rel:"noopener"}},[e._v("doubly-stochastic matrix")]),e._v(" located on the left side of the "),o("strong",[e._v("HARMONY MATRICES")]),e._v(" tab, and then click the "),o("strong",[e._v("Optimize Rotations")]),e._v(" button.")]),e._v(" "),o("p",[e._v("The harmonic probabilities entered will apply to all of the notes played harmonically in the performance except for the final note on each staff, as those two notes will have the same "),o("a",{attrs:{href:"https://en.wikipedia.org/wiki/Pitch_class",target:"_blank",rel:"noopener"}},[e._v("pitch class")]),e._v(" as the first note in the melody staff. These notes provide a sense of resolution and finality to the performance, and are the only two notes in the performance that aren't determined by the quantum computer.")])])}]};e.exports={attributes:{title:"Quantum Toy Piano",author:"James Weaver",description:"The Quantum Music Composer application enables a user to compose music that is performed by a quantum computer or quantum simulator.",image:"/images/experiments/quantum-toy-piano/performance-tab.png",to:"/experiments/quantum-toy-piano",media:["/images/experiments/quantum-toy-piano/performance-tab.png","/images/experiments/quantum-toy-piano/third-species-performance.png"],source:"https://github.com/JavaFXpert/quantum-toy-piano-ibmq"},html:'<p>The Quantum Music Composer application enables a user to compose music that is performed by a quantum computer or quantum simulator. The musical <em>composition</em> consists of a series of quantum circuits. Each quantum musical tone <a href="#references">[1]</a> in the <em>performance</em> of a composition is a quantum state, which when measured, results in a pitch determined by quantum mechanical behavior. This normally results in unique melodies and harmonies each time a given composition is performed by a quantum computer or simulator. Fig. 1 contains a musical score captured from one such performance.</p>\n<h2 id="creating-a-quantum-musical-composition">Creating a quantum musical composition</h2>\n<p>To create a quantum musical composition, the user first supplies the desired probabilities for a given pitch to follow another given pitch <em>melodically</em>. Take a moment to examine the music score in Fig. 1 and notice that the staff labeled <strong>Melody</strong> contains an eight-note melody. Please also realize that the staff labeled <strong>Harmony</strong> actually contains seven four-note melodies.  Users enter their desired probabilities into the <a href="https://en.wikipedia.org/wiki/Doubly_stochastic_matrix" target="_blank" rel="noopener">doubly-stochastic matrix</a> located on the left side of the <strong>MELODY MATRICES</strong> tab.</p>\n<p>Clicking the <strong>Optimize Rotations</strong> button updates the <a href="https://en.wikipedia.org/wiki/Orthogonal_matrix" target="_blank" rel="noopener">orthogonal matrix</a> on the right to contain values, that when squared, comprise a <a href="https://en.wikipedia.org/wiki/Unistochastic_matrix" target="_blank" rel="noopener">unistochastic matrix</a> that approximates the user\'s desired probabilities. Deselecting and selecting the <strong>Show Probabilities</strong> checkbox toggles between showing the orthogonal matrix and the unistochastic matrix, respectively. The application optimizes the unistochastic matrix by gradually changing the angles of the six degree-of-freedom rotations in four-dimensional vector space until the difference between the doubly-stochastic matrix and the unistochastic matrix is minimized.  You can experiment with the effects of each rotation on the matrix on the right by using the sliders in the <strong>Degree of Freedom Rotations</strong> region of this tab. Each slider has the range <img src="docimages/eqn_range_0_pi2.gif" alt="eqn_range_0_pi2"> radians.</p>\n<p>To continue creating the quantum musical composition, the user supplies the desired probabilities for a given pitch to be played <em>harmonically</em> with another given pitch. Take another moment to examine the musical score in Fig. 1 and notice that each of the notes in the staff labeled <strong>Melody</strong> have a note in the staff labeled <strong>Harmony</strong> directly above it. Users enter their desired probabilities into the <a href="https://en.wikipedia.org/wiki/Doubly_stochastic_matrix" target="_blank" rel="noopener">doubly-stochastic matrix</a> located on the left side of the <strong>HARMONY MATRICES</strong> tab, and then click the <strong>Optimize Rotations</strong> button.</p>\n<p>The harmonic probabilities entered will apply to all of the notes played harmonically in the performance except for the final note on each staff, as those two notes will have the same <a href="https://en.wikipedia.org/wiki/Pitch_class" target="_blank" rel="noopener">pitch class</a> as the first note in the melody staff. These notes provide a sense of resolution and finality to the performance, and are the only two notes in the performance that aren\'t determined by the quantum computer.</p>\n',vue:{render:o.render,staticRenderFns:o.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(e){return this.templateRender?this.templateRender():e("div","Rendering")},created:function(){this.templateRender=o.render,this.$options.staticRenderFns=o.staticRenderFns}}}}}}]);