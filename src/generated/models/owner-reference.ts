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
 * OwnerReference contains enough information to let you identify an owning object. An owning object must be in the same namespace as the dependent, or be cluster-scoped, so there is no namespace field.
 * @export
 * @interface OwnerReference
 */
export interface OwnerReference {
  /**
   * API version of the referent.
   * @type {string}
   * @memberof OwnerReference
   */
  apiVersion?: string;
  /**
   * If true, AND if the owner has the \"foregroundDeletion\" finalizer, then the owner cannot be deleted from the key-value store until this reference is removed. Defaults to false. To set this field, a user needs \"delete\" permission of the owner, otherwise 422 (Unprocessable Entity) will be returned. +optional
   * @type {boolean}
   * @memberof OwnerReference
   */
  blockOwnerDeletion?: boolean;
  /**
   * If true, this reference points to the managing controller. +optional
   * @type {boolean}
   * @memberof OwnerReference
   */
  controller?: boolean;
  /**
   * Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   * @type {string}
   * @memberof OwnerReference
   */
  kind?: string;
  /**
   * Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
   * @type {string}
   * @memberof OwnerReference
   */
  name?: string;
  /**
   * UID is a type that holds unique ID values, including UUIDs.  Because we don\'t ONLY use UUIDs, this is an alias to string.  Being a type captures intent and helps make sure that UIDs and names do not get conflated.
   * @type {string}
   * @memberof OwnerReference
   */
  uid?: string;
}
