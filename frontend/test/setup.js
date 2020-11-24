// See here: https://github.com/vuetifyjs/vuetify/issues/4964#issuecomment-500574050
// Gets rid of the `[Vuetify] Multiple instances of Vue detected` error.
// TODO: Vue + Vuetify 3, fix this.
import Vue from 'vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify)
