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
 * @interface IstioValidationSummary
 */
export interface IstioValidationSummary {
  /**
   * Number of validations with error severity
   * @type {number}
   * @memberof IstioValidationSummary
   */
  errors: number;
  /**
   * Number of Istio Objects analyzed
   * @type {number}
   * @memberof IstioValidationSummary
   */
  objectCount: number;
  /**
   * Number of validations with warning severity
   * @type {number}
   * @memberof IstioValidationSummary
   */
  warnings: number;
}
