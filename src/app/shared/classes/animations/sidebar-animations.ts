import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

export class SidebarAnimationss {
  public static enterAnimation = trigger('enterAnimation', [
    transition(
      ':enter',
      [
        style({ transform: 'translateX({{translateFrom}})' }), // Fixed 'trnasform' to 'transform'
        animate(
          '{{duration}}',
          style({ transform: 'translateX({{translateTo}})' })
        ),
      ],
      { params: { translateFrom: '8%', translateTo: '0', duration: '200ms' } }
    ),
  ]);


  public static fadeInOut = trigger('fadeInOut', [
    state('void', style({ opacity: 0 })),  // Hardcoded value for void state
    state('*', style({ opacity: 1 })),     // Hardcoded value for any other state
    transition('void <=> *', [
      animate('250ms ease-in-out')          // Hardcoded duration
    ])
  ]);
  
}
