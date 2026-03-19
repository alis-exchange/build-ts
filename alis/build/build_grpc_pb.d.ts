// GENERATED CODE -- DO NOT EDIT!

// package: alis.build
// file: alis/build/build.proto

import * as alis_build_build_pb from "../../alis/build/build_pb";
import * as google_longrunning_operations_pb from "../../google/longrunning/operations_pb";
import * as grpc from "grpc";

interface IBuildServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  retrieveMyWorkstation: grpc.MethodDefinition<alis_build_build_pb.RetrieveMyWorkstationRequest, google_longrunning_operations_pb.Operation>;
  getWorkstationOperation: grpc.MethodDefinition<google_longrunning_operations_pb.GetOperationRequest, google_longrunning_operations_pb.Operation>;
  getBuildSpec: grpc.MethodDefinition<alis_build_build_pb.GetBuildSpecRequest, alis_build_build_pb.BuildSpec>;
  listBuildSpecs: grpc.MethodDefinition<alis_build_build_pb.ListBuildSpecsRequest, alis_build_build_pb.ListBuildSpecsResponse>;
}

export const BuildServiceService: IBuildServiceService;

export interface IBuildServiceServer extends grpc.UntypedServiceImplementation {
  retrieveMyWorkstation: grpc.handleUnaryCall<alis_build_build_pb.RetrieveMyWorkstationRequest, google_longrunning_operations_pb.Operation>;
  getWorkstationOperation: grpc.handleUnaryCall<google_longrunning_operations_pb.GetOperationRequest, google_longrunning_operations_pb.Operation>;
  getBuildSpec: grpc.handleUnaryCall<alis_build_build_pb.GetBuildSpecRequest, alis_build_build_pb.BuildSpec>;
  listBuildSpecs: grpc.handleUnaryCall<alis_build_build_pb.ListBuildSpecsRequest, alis_build_build_pb.ListBuildSpecsResponse>;
}

export class BuildServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  retrieveMyWorkstation(argument: alis_build_build_pb.RetrieveMyWorkstationRequest, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  retrieveMyWorkstation(argument: alis_build_build_pb.RetrieveMyWorkstationRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  retrieveMyWorkstation(argument: alis_build_build_pb.RetrieveMyWorkstationRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  getWorkstationOperation(argument: google_longrunning_operations_pb.GetOperationRequest, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  getWorkstationOperation(argument: google_longrunning_operations_pb.GetOperationRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  getWorkstationOperation(argument: google_longrunning_operations_pb.GetOperationRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  getBuildSpec(argument: alis_build_build_pb.GetBuildSpecRequest, callback: grpc.requestCallback<alis_build_build_pb.BuildSpec>): grpc.ClientUnaryCall;
  getBuildSpec(argument: alis_build_build_pb.GetBuildSpecRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<alis_build_build_pb.BuildSpec>): grpc.ClientUnaryCall;
  getBuildSpec(argument: alis_build_build_pb.GetBuildSpecRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<alis_build_build_pb.BuildSpec>): grpc.ClientUnaryCall;
  listBuildSpecs(argument: alis_build_build_pb.ListBuildSpecsRequest, callback: grpc.requestCallback<alis_build_build_pb.ListBuildSpecsResponse>): grpc.ClientUnaryCall;
  listBuildSpecs(argument: alis_build_build_pb.ListBuildSpecsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<alis_build_build_pb.ListBuildSpecsResponse>): grpc.ClientUnaryCall;
  listBuildSpecs(argument: alis_build_build_pb.ListBuildSpecsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<alis_build_build_pb.ListBuildSpecsResponse>): grpc.ClientUnaryCall;
}
