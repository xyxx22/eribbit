import XtxSkeleton from './xtx-skelelon.vue'
import XtxCarousel from '@/components/library/xtx-carousel.vue'
import XtxMore from '@/components/library/xtx-more.vue'
export default {
  install (app) {
    app.component(XtxSkeleton.name, XtxSkeleton)
    app.component(XtxCarousel.name, XtxCarousel)
    app.component(XtxMore.name, XtxMore)
  }
}
