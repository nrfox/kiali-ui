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

import { Iter8CriteriaDetail } from './iter8-criteria-detail';
import { Iter8Duration } from './iter8-duration';
import { Iter8ExperimentItem } from './iter8-experiment-item';
import { Iter8Networking } from './iter8-networking';
import { Iter8TrafficControl } from './iter8-traffic-control';
import { ResourcePermissions } from './resource-permissions';

/**
 * For Displaying Iter8 Experiment Tabs
 * @export
 * @interface Iter8ExperimentDetail
 */
export interface Iter8ExperimentDetail {
  /**
   *
   * @type {string}
   * @memberof Iter8ExperimentDetail
   */
  action?: string;
  /**
   *
   * @type {Array<Iter8CriteriaDetail>}
   * @memberof Iter8ExperimentDetail
   */
  criterias?: Array<Iter8CriteriaDetail>;
  /**
   *
   * @type {Iter8Duration}
   * @memberof Iter8ExperimentDetail
   */
  duration?: Iter8Duration;
  /**
   *
   * @type {Iter8ExperimentItem}
   * @memberof Iter8ExperimentDetail
   */
  experimentItem?: Iter8ExperimentItem;
  /**
   *
   * @type {string}
   * @memberof Iter8ExperimentDetail
   */
  experimentType?: string;
  /**
   *
   * @type {Iter8Networking}
   * @memberof Iter8ExperimentDetail
   */
  networking?: Iter8Networking;
  /**
   *
   * @type {ResourcePermissions}
   * @memberof Iter8ExperimentDetail
   */
  permissions?: ResourcePermissions;
  /**
   *
   * @type {Iter8TrafficControl}
   * @memberof Iter8ExperimentDetail
   */
  trafficControl?: Iter8TrafficControl;
}
