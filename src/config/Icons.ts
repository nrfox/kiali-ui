import deepFreeze from 'deep-freeze';

import solidPinIcon from '../assets/img/solid-pin.png';
import hollowPinIcon from '../assets/img/hollow-pin.png';
import { BlueprintIcon } from '@patternfly/react-icons';

export { solidPinIcon, hollowPinIcon };

const mutIcons = {
  istio: {
    circuitBreaker: { className: 'fa fa-bolt', type: 'fa', name: 'bolt', ascii: '\uf0e7 ' },
    missingSidecar: {
      icon: BlueprintIcon,
      className: 'pf-icon pf-icon-blueprint',
      type: 'pf',
      name: 'blueprint',
      ascii: '\ue915 ',
      color: 'red'
    },
    mtls: { className: 'pf-icon pf-icon-locked', type: 'pf', name: 'locked', ascii: '\uE02a ' },
    disabledMtls: { className: 'pf-icon pf-icon-unlocked', type: 'fa', name: 'unlock', ascii: '\uE065 ' },
    root: { className: 'fa fa-arrow-alt-circle-right', type: 'fa', name: 'arrow-alt-circle-right', ascii: '\uf35a ' },
    virtualService: { className: 'fa fa-code-branch', type: 'fa', name: 'code-fork', ascii: '\uf126 ' },
    // TODO: Figure out why pf icons aren't working in the node label but fa is for some reason.
    // requestRouting: { className: 'pf-icon pf-icon-route', type: 'pf', name: 'route', ascii: '\uE065' },
    requestRouting: { className: 'fa fa-cubes', type: 'fa', name: 'cubes', ascii: '\uf1b3' },
    // faultInjection: { className: 'pf-icon pf-icon-attention-bell', type: 'pf', name: 'attention-bell', ascii: '' },
    faultInjection: { className: 'fa fa-ban', type: 'fa', name: 'ban', ascii: '' },
    trafficShifting: { className: 'fa fa-balance-scale', type: 'fa', name: 'balance-scale', ascii: '' },
    tcpTrafficShifting: { className: 'fa fa-balance-scale', type: 'fa', name: 'balance-scale', ascii: '' },
    requestTimeouts: { className: 'fa fa-clock', type: 'fa', name: 'clock', ascii: '' }
  }
};

export const icons = deepFreeze(mutIcons) as typeof mutIcons;
