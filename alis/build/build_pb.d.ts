import * as jspb from 'google-protobuf'

import * as google_longrunning_operations_pb from '../../google/longrunning/operations_pb'; // proto import: "google/longrunning/operations.proto"
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb'; // proto import: "google/protobuf/field_mask.proto"
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"


export class RetrieveMyWorkstationRequest extends jspb.Message {
  getCountryCode(): string;
  setCountryCode(value: string): RetrieveMyWorkstationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RetrieveMyWorkstationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RetrieveMyWorkstationRequest): RetrieveMyWorkstationRequest.AsObject;
  static serializeBinaryToWriter(message: RetrieveMyWorkstationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RetrieveMyWorkstationRequest;
  static deserializeBinaryFromReader(message: RetrieveMyWorkstationRequest, reader: jspb.BinaryReader): RetrieveMyWorkstationRequest;
}

export namespace RetrieveMyWorkstationRequest {
  export type AsObject = {
    countryCode: string,
  }
}

export class RetrieveMyWorkstationMetadata extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RetrieveMyWorkstationMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: RetrieveMyWorkstationMetadata): RetrieveMyWorkstationMetadata.AsObject;
  static serializeBinaryToWriter(message: RetrieveMyWorkstationMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RetrieveMyWorkstationMetadata;
  static deserializeBinaryFromReader(message: RetrieveMyWorkstationMetadata, reader: jspb.BinaryReader): RetrieveMyWorkstationMetadata;
}

export namespace RetrieveMyWorkstationMetadata {
  export type AsObject = {
  }
}

export class RetrieveMyWorkstationResponse extends jspb.Message {
  getUri(): string;
  setUri(value: string): RetrieveMyWorkstationResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RetrieveMyWorkstationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RetrieveMyWorkstationResponse): RetrieveMyWorkstationResponse.AsObject;
  static serializeBinaryToWriter(message: RetrieveMyWorkstationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RetrieveMyWorkstationResponse;
  static deserializeBinaryFromReader(message: RetrieveMyWorkstationResponse, reader: jspb.BinaryReader): RetrieveMyWorkstationResponse;
}

export namespace RetrieveMyWorkstationResponse {
  export type AsObject = {
    uri: string,
  }
}

export class BuildSpec extends jspb.Message {
  getName(): string;
  setName(value: string): BuildSpec;

  getDisplayName(): string;
  setDisplayName(value: string): BuildSpec;

  getStatus(): BuildSpec.Status;
  setStatus(value: BuildSpec.Status): BuildSpec;

  getSummary(): string;
  setSummary(value: string): BuildSpec;

  getContent(): BuildSpec.Content | undefined;
  setContent(value?: BuildSpec.Content): BuildSpec;
  hasContent(): boolean;
  clearContent(): BuildSpec;

  getProductsList(): Array<string>;
  setProductsList(value: Array<string>): BuildSpec;
  clearProductsList(): BuildSpec;
  addProducts(value: string, index?: number): BuildSpec;

  getAccount(): string;
  setAccount(value: string): BuildSpec;

  getExtensionsEnabledList(): Array<BuildSpec.Extension>;
  setExtensionsEnabledList(value: Array<BuildSpec.Extension>): BuildSpec;
  clearExtensionsEnabledList(): BuildSpec;
  addExtensionsEnabled(value: BuildSpec.Extension, index?: number): BuildSpec;

  getNeuronsList(): Array<string>;
  setNeuronsList(value: Array<string>): BuildSpec;
  clearNeuronsList(): BuildSpec;
  addNeurons(value: string, index?: number): BuildSpec;

  getEtag(): string;
  setEtag(value: string): BuildSpec;

  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): BuildSpec;
  hasCreateTime(): boolean;
  clearCreateTime(): BuildSpec;

  getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): BuildSpec;
  hasUpdateTime(): boolean;
  clearUpdateTime(): BuildSpec;

  getDeleteTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDeleteTime(value?: google_protobuf_timestamp_pb.Timestamp): BuildSpec;
  hasDeleteTime(): boolean;
  clearDeleteTime(): BuildSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BuildSpec.AsObject;
  static toObject(includeInstance: boolean, msg: BuildSpec): BuildSpec.AsObject;
  static serializeBinaryToWriter(message: BuildSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BuildSpec;
  static deserializeBinaryFromReader(message: BuildSpec, reader: jspb.BinaryReader): BuildSpec;
}

export namespace BuildSpec {
  export type AsObject = {
    name: string,
    displayName: string,
    status: BuildSpec.Status,
    summary: string,
    content?: BuildSpec.Content.AsObject,
    productsList: Array<string>,
    account: string,
    extensionsEnabledList: Array<BuildSpec.Extension>,
    neuronsList: Array<string>,
    etag: string,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    deleteTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }

  export class Content extends jspb.Message {
    getSpecify(): BuildSpec.Content.Specify | undefined;
    setSpecify(value?: BuildSpec.Content.Specify): Content;
    hasSpecify(): boolean;
    clearSpecify(): Content;

    getPlan(): BuildSpec.Content.Plan | undefined;
    setPlan(value?: BuildSpec.Content.Plan): Content;
    hasPlan(): boolean;
    clearPlan(): Content;

    getTasks(): BuildSpec.Content.Tasks | undefined;
    setTasks(value?: BuildSpec.Content.Tasks): Content;
    hasTasks(): boolean;
    clearTasks(): Content;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Content.AsObject;
    static toObject(includeInstance: boolean, msg: Content): Content.AsObject;
    static serializeBinaryToWriter(message: Content, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Content;
    static deserializeBinaryFromReader(message: Content, reader: jspb.BinaryReader): Content;
  }

  export namespace Content {
    export type AsObject = {
      specify?: BuildSpec.Content.Specify.AsObject,
      plan?: BuildSpec.Content.Plan.AsObject,
      tasks?: BuildSpec.Content.Tasks.AsObject,
    }

    export class Specify extends jspb.Message {
      getMarkdown(): string;
      setMarkdown(value: string): Specify;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Specify.AsObject;
      static toObject(includeInstance: boolean, msg: Specify): Specify.AsObject;
      static serializeBinaryToWriter(message: Specify, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Specify;
      static deserializeBinaryFromReader(message: Specify, reader: jspb.BinaryReader): Specify;
    }

    export namespace Specify {
      export type AsObject = {
        markdown: string,
      }
    }


    export class Plan extends jspb.Message {
      getMarkdown(): string;
      setMarkdown(value: string): Plan;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Plan.AsObject;
      static toObject(includeInstance: boolean, msg: Plan): Plan.AsObject;
      static serializeBinaryToWriter(message: Plan, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Plan;
      static deserializeBinaryFromReader(message: Plan, reader: jspb.BinaryReader): Plan;
    }

    export namespace Plan {
      export type AsObject = {
        markdown: string,
      }
    }


    export class Tasks extends jspb.Message {
      getMarkdown(): string;
      setMarkdown(value: string): Tasks;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Tasks.AsObject;
      static toObject(includeInstance: boolean, msg: Tasks): Tasks.AsObject;
      static serializeBinaryToWriter(message: Tasks, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Tasks;
      static deserializeBinaryFromReader(message: Tasks, reader: jspb.BinaryReader): Tasks;
    }

    export namespace Tasks {
      export type AsObject = {
        markdown: string,
      }
    }

  }


  export enum Status { 
    STATE_UNSPECIFIED = 0,
    NEW = 1,
    ACTIVE = 2,
    COMPLETED = 3,
  }

  export enum Extension { 
    EXTENSION_UNSPECIFIED = 0,
    EXTENSION_BILLING = 1,
    EXTENSION_PROPOSAL = 2,
    EXTENSION_IDEATE = 3,
    EXTENSION_GITHUB = 7,
    EXTENSION_WIREFRAME = 4,
    EXTENSION_TIMESHEET = 5,
    EXTENSION_FILE_SET = 6,
  }
}

export class GetBuildSpecRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetBuildSpecRequest;

  getView(): BuildSpecView;
  setView(value: BuildSpecView): GetBuildSpecRequest;

  getReadMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setReadMask(value?: google_protobuf_field_mask_pb.FieldMask): GetBuildSpecRequest;
  hasReadMask(): boolean;
  clearReadMask(): GetBuildSpecRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBuildSpecRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetBuildSpecRequest): GetBuildSpecRequest.AsObject;
  static serializeBinaryToWriter(message: GetBuildSpecRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBuildSpecRequest;
  static deserializeBinaryFromReader(message: GetBuildSpecRequest, reader: jspb.BinaryReader): GetBuildSpecRequest;
}

export namespace GetBuildSpecRequest {
  export type AsObject = {
    name: string,
    view: BuildSpecView,
    readMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class ListBuildSpecsRequest extends jspb.Message {
  getPageSize(): number;
  setPageSize(value: number): ListBuildSpecsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListBuildSpecsRequest;

  getView(): BuildSpecView;
  setView(value: BuildSpecView): ListBuildSpecsRequest;

  getReadMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setReadMask(value?: google_protobuf_field_mask_pb.FieldMask): ListBuildSpecsRequest;
  hasReadMask(): boolean;
  clearReadMask(): ListBuildSpecsRequest;

  getFilter(): string;
  setFilter(value: string): ListBuildSpecsRequest;

  getOrderBy(): string;
  setOrderBy(value: string): ListBuildSpecsRequest;

  getShowDeleted(): boolean;
  setShowDeleted(value: boolean): ListBuildSpecsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListBuildSpecsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListBuildSpecsRequest): ListBuildSpecsRequest.AsObject;
  static serializeBinaryToWriter(message: ListBuildSpecsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListBuildSpecsRequest;
  static deserializeBinaryFromReader(message: ListBuildSpecsRequest, reader: jspb.BinaryReader): ListBuildSpecsRequest;
}

export namespace ListBuildSpecsRequest {
  export type AsObject = {
    pageSize: number,
    pageToken: string,
    view: BuildSpecView,
    readMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    filter: string,
    orderBy: string,
    showDeleted: boolean,
  }
}

export class ListBuildSpecsResponse extends jspb.Message {
  getBuildSpecsList(): Array<BuildSpec>;
  setBuildSpecsList(value: Array<BuildSpec>): ListBuildSpecsResponse;
  clearBuildSpecsList(): ListBuildSpecsResponse;
  addBuildSpecs(value?: BuildSpec, index?: number): BuildSpec;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListBuildSpecsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListBuildSpecsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListBuildSpecsResponse): ListBuildSpecsResponse.AsObject;
  static serializeBinaryToWriter(message: ListBuildSpecsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListBuildSpecsResponse;
  static deserializeBinaryFromReader(message: ListBuildSpecsResponse, reader: jspb.BinaryReader): ListBuildSpecsResponse;
}

export namespace ListBuildSpecsResponse {
  export type AsObject = {
    buildSpecsList: Array<BuildSpec.AsObject>,
    nextPageToken: string,
  }
}

export enum BuildSpecView { 
  BUILD_SPEC_VIEW_UNSPECIFIED = 0,
  BUILD_SPEC_VIEW_BASIC = 1,
  BUILD_SPEC_VIEW_FULL = 2,
}
