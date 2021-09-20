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
 * This is used for returning the token
 * @export
 * @interface TokenResponse
 */
export interface TokenResponse {
  /**
   * The expired time for the token A string with the Datetime when the token will be expired
   * @type {string}
   * @memberof TokenResponse
   */
  expiresOn: string;
  /**
   * The authentication token A string with the authentication token for the user
   * @type {string}
   * @memberof TokenResponse
   */
  token: string;
  /**
   * The username for the token A string with the user\'s username
   * @type {string}
   * @memberof TokenResponse
   */
  username: string;
}
