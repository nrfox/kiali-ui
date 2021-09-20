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
 * Reference is a reference from one span to another
 * @export
 * @interface Reference
 */
export interface Reference {
  /**
   * ReferenceType is the reference type of one span to another
   * @type {string}
   * @memberof Reference
   */
  refType?: string;
  /**
   * SpanID is the id of a span
   * @type {string}
   * @memberof Reference
   */
  spanID?: string;
  /**
   *
   * @type {string}
   * @memberof Reference
   */
  traceID?: string;
}
