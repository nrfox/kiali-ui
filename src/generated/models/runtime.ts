/* tslint:disable */
/* eslint-disable */
/**
 * Kiali
 * Kiali project, observability for the Istio service mesh
 *
 * The version of the OpenAPI document: _
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { DashboardRef } from './dashboard-ref';

/**
 * Runtime holds the runtime title and associated dashboard template(s)
 * @export
 * @interface Runtime
 */
export interface Runtime {
  /**
   *
   * @type {Array<DashboardRef>}
   * @memberof Runtime
   */
  dashboardRefs?: Array<DashboardRef>;
  /**
   *
   * @type {string}
   * @memberof Runtime
   */
  name?: string;
}
