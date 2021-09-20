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

/**
 *
 * @export
 * @interface IstioCheck
 */
export interface IstioCheck {
  /**
   * The check code used to identify a check
   * @type {string}
   * @memberof IstioCheck
   */
  code: string;
  /**
   * Description of the check
   * @type {string}
   * @memberof IstioCheck
   */
  message: string;
  /**
   * String that describes where in the yaml file is the check located
   * @type {string}
   * @memberof IstioCheck
   */
  path?: string;
  /**
   *
   * @type {string}
   * @memberof IstioCheck
   */
  severity: string;
}
