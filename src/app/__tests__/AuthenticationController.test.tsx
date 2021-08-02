import { mount } from 'enzyme';
import * as React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { DurationInSeconds, IntervalInMilliseconds } from 'types/Common';
import { JaegerInfo } from 'types/JaegerInfo';
import Namespace from 'types/Namespace';
import { ServerStatus } from 'types/ServerStatus';
import { TLSStatus } from 'types/TLSStatus';
import { LoginStatus } from '../../store/Store';
import AuthenticationController from '../AuthenticationController';

const mockStore = configureMockStore([thunk]);

describe('AuthenticationController', () => {
  it('calls publicAreaComponent with postLoginError if not logging in', () => {
    const spy = jest.fn((_isPostLoginPerforming: boolean, _errorMsg?: string) => (
      <div className="publicAreaComponent" />
    ));
    const props = {
      authenticated: false,
      isLoginError: false,
      logout: () => {},
      setActiveNamespaces: (_namespaces: Namespace[]) => {},
      setDuration: (_duration: DurationInSeconds) => {},
      setJaegerInfo: (_jaegerInfo: JaegerInfo | null) => {},
      setLandingRoute: (_route: string | undefined) => {},
      setMeshTlsStatus: (_meshStatus: TLSStatus) => {},
      setNamespaces: (_namespaces: Namespace[], _receivedAt: Date) => {},
      setRefreshInterval: (_interval: IntervalInMilliseconds) => {},
      setServerStatus: (_serverStatus: ServerStatus) => {},
      checkCredentials: () => {},
      protectedAreaComponent: <div />,
      publicAreaComponent: spy
    };

    const store = mockStore({
      authentication: {
        status: LoginStatus.logging
      }
    });

    mount(
      <Provider store={store}>
        <AuthenticationController {...props} />
      </Provider>
    );

    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith(false, undefined);
  });

  it('calls publicAreaComponent with postLoginError if authenticated', () => {
    const spy = jest.fn((_isPostLoginPerforming: boolean, _errorMsg?: string) => (
      <div className="publicAreaComponent" />
    ));
    const props = {
      authenticated: false,
      isLoginError: false,
      logout: () => {},
      setActiveNamespaces: (_namespaces: Namespace[]) => {},
      setDuration: (_duration: DurationInSeconds) => {},
      setJaegerInfo: (_jaegerInfo: JaegerInfo | null) => {},
      setLandingRoute: (_route: string | undefined) => {},
      setMeshTlsStatus: (_meshStatus: TLSStatus) => {},
      setNamespaces: (_namespaces: Namespace[], _receivedAt: Date) => {},
      setRefreshInterval: (_interval: IntervalInMilliseconds) => {},
      setServerStatus: (_serverStatus: ServerStatus) => {},
      checkCredentials: () => {},
      protectedAreaComponent: <div />,
      publicAreaComponent: spy
    };

    const store = mockStore({
      authentication: {
        status: LoginStatus.logging
      }
    });

    mount(
      <Provider store={store}>
        <AuthenticationController {...props} />
      </Provider>
    );

    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith(false, undefined);
  });
});
