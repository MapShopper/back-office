import {
  animate,
  query,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { SidebarAnimationss } from './sidebar-animations';
export class Animations {
  public static enterAnimation = SidebarAnimationss.enterAnimation;
  public static fadeInOut = SidebarAnimationss.fadeInOut;
  public static routerAnimation = trigger('routerAnimation', [
    transition('* => *', [
      query(':enter', [style({ opacity: 0, scale: 0.9 })], { optional: true }),
      query(':leave', [animate('0.3s', style({ opacity: 0, scale: 0.9 }))], {
        optional: true,
      }),
      query(':enter', [animate('0.3s', style({ opacity: 1, scale: 1 }))], {
        optional: true,
      }),
    ]),
  ]);
  public  static fadeInOutS = trigger('fadeInOutS', [
    state('void', style({ opacity: '{{opacityFirst}}' }), { params: { opacityFirst: 0 } }),
    state('*', style({ opacity: '{{opacitySecond}}' }), { params: { opacitySecond: 1 } }),
    transition('void <=> *', [
      animate('{{duration}} ease-in-out')
    ], { params: { duration: '250ms', opacityFirst: 0, opacitySecond: 1 } })
  ]);
  public static simpleFade = trigger('simpleFade', [
    transition('* <=> *', [
      style({ opacity: 0 }),
      animate('500ms ease-in', style({ opacity: 1 }))
    ])
  ]);
  public static slideInOut = trigger('slideInOut', [
    transition('* <=> *', [
      style({ transform: 'translateY(-100%)', opacity: 0 }),  // Start off-screen to the left
      animate('500ms', style({ transform: 'translateY(0)', opacity: 1 })) // Slide in and fade in
    ])
  ]);
  public static slideFadeInOut = trigger('slideFadeInOut', [
    transition('* <=> *', [
      style({ transform: 'translateY(-100%)', opacity: 0 }),  // Start off-screen to the left and fully transparent
      animate('500ms ease-in-out', style({ transform: 'translateY(0)', opacity: 1 })) // Slide in and fade in to fully opaque
    ])
  ]);
}
