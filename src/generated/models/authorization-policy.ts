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

import { AuthorizationPolicySpec } from './authorization-policy-spec';
import { ObjectMeta } from './object-meta';

/**
 * This is used for returning an AuthorizationPolicy
 * @export
 * @interface AuthorizationPolicy
 */
export interface AuthorizationPolicy {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources +optional
   * @type {string}
   * @memberof AuthorizationPolicy
   */
  apiVersion?: string;
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds +optional
   * @type {string}
   * @memberof AuthorizationPolicy
   */
  kind?: string;
  /**
   *
   * @type {ObjectMeta}
   * @memberof AuthorizationPolicy
   */
  metadata?: ObjectMeta;
  /**
   *
   * @type {AuthorizationPolicySpec}
   * @memberof AuthorizationPolicy
   */
  spec?: AuthorizationPolicySpec;
  /**
   *
   * @type {{ [key: string]: object; }}
   * @memberof AuthorizationPolicy
   */
  status?: { [key: string]: object };
}
