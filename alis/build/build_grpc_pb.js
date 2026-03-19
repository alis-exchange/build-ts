// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var alis_build_build_pb = require('../../alis/build/build_pb.js');
var google_longrunning_operations_pb = require('../../google/longrunning/operations_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_alis_build_BuildSpec(arg) {
  if (!(arg instanceof alis_build_build_pb.BuildSpec)) {
    throw new Error('Expected argument of type alis.build.BuildSpec');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_build_BuildSpec(buffer_arg) {
  return alis_build_build_pb.BuildSpec.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_build_GetBuildSpecRequest(arg) {
  if (!(arg instanceof alis_build_build_pb.GetBuildSpecRequest)) {
    throw new Error('Expected argument of type alis.build.GetBuildSpecRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_build_GetBuildSpecRequest(buffer_arg) {
  return alis_build_build_pb.GetBuildSpecRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_build_ListBuildSpecsRequest(arg) {
  if (!(arg instanceof alis_build_build_pb.ListBuildSpecsRequest)) {
    throw new Error('Expected argument of type alis.build.ListBuildSpecsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_build_ListBuildSpecsRequest(buffer_arg) {
  return alis_build_build_pb.ListBuildSpecsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_build_ListBuildSpecsResponse(arg) {
  if (!(arg instanceof alis_build_build_pb.ListBuildSpecsResponse)) {
    throw new Error('Expected argument of type alis.build.ListBuildSpecsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_build_ListBuildSpecsResponse(buffer_arg) {
  return alis_build_build_pb.ListBuildSpecsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_alis_build_RetrieveMyWorkstationRequest(arg) {
  if (!(arg instanceof alis_build_build_pb.RetrieveMyWorkstationRequest)) {
    throw new Error('Expected argument of type alis.build.RetrieveMyWorkstationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_alis_build_RetrieveMyWorkstationRequest(buffer_arg) {
  return alis_build_build_pb.RetrieveMyWorkstationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_longrunning_GetOperationRequest(arg) {
  if (!(arg instanceof google_longrunning_operations_pb.GetOperationRequest)) {
    throw new Error('Expected argument of type google.longrunning.GetOperationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_longrunning_GetOperationRequest(buffer_arg) {
  return google_longrunning_operations_pb.GetOperationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_longrunning_Operation(arg) {
  if (!(arg instanceof google_longrunning_operations_pb.Operation)) {
    throw new Error('Expected argument of type google.longrunning.Operation');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_longrunning_Operation(buffer_arg) {
  return google_longrunning_operations_pb.Operation.deserializeBinary(new Uint8Array(buffer_arg));
}


// Public-facing API surface for Alis Build
var BuildServiceService = exports.BuildServiceService = {
  // RetrieveMyWorkstation returns the relevant workstation beloning to the
// caller. If a workstation does not exist, it will provision one and then
// return with the one closest to the client.
retrieveMyWorkstation: {
    path: '/alis.build.BuildService/RetrieveMyWorkstation',
    requestStream: false,
    responseStream: false,
    requestType: alis_build_build_pb.RetrieveMyWorkstationRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_alis_build_RetrieveMyWorkstationRequest,
    requestDeserialize: deserialize_alis_build_RetrieveMyWorkstationRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Retrieves the status of a workstation operation, e.g. for a RetrieveMyWorkstation request.
getWorkstationOperation: {
    path: '/alis.build.BuildService/GetWorkstationOperation',
    requestStream: false,
    responseStream: false,
    requestType: google_longrunning_operations_pb.GetOperationRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_longrunning_GetOperationRequest,
    requestDeserialize: deserialize_google_longrunning_GetOperationRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Returns a build spec
getBuildSpec: {
    path: '/alis.build.BuildService/GetBuildSpec',
    requestStream: false,
    responseStream: false,
    requestType: alis_build_build_pb.GetBuildSpecRequest,
    responseType: alis_build_build_pb.BuildSpec,
    requestSerialize: serialize_alis_build_GetBuildSpecRequest,
    requestDeserialize: deserialize_alis_build_GetBuildSpecRequest,
    responseSerialize: serialize_alis_build_BuildSpec,
    responseDeserialize: deserialize_alis_build_BuildSpec,
  },
  // Lists build specs
listBuildSpecs: {
    path: '/alis.build.BuildService/ListBuildSpecs',
    requestStream: false,
    responseStream: false,
    requestType: alis_build_build_pb.ListBuildSpecsRequest,
    responseType: alis_build_build_pb.ListBuildSpecsResponse,
    requestSerialize: serialize_alis_build_ListBuildSpecsRequest,
    requestDeserialize: deserialize_alis_build_ListBuildSpecsRequest,
    responseSerialize: serialize_alis_build_ListBuildSpecsResponse,
    responseDeserialize: deserialize_alis_build_ListBuildSpecsResponse,
  },
};

exports.BuildServiceClient = grpc.makeGenericClientConstructor(BuildServiceService, 'BuildService');
