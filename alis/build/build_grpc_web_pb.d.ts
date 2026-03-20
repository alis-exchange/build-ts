import * as grpcWeb from 'grpc-web';

import * as alis_build_build_pb from '../../alis/build/build_pb'; // proto import: "alis/build/build.proto"
import * as google_longrunning_operations_pb from '@alis-build/google-common-protos/google/longrunning/operations_pb'; // proto import: "google/longrunning/operations.proto"


export class BuildServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  retrieveMyWorkstation(
    request: alis_build_build_pb.RetrieveMyWorkstationRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_longrunning_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_longrunning_operations_pb.Operation>;

  getWorkstationOperation(
    request: google_longrunning_operations_pb.GetOperationRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_longrunning_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_longrunning_operations_pb.Operation>;

  getBuildSpec(
    request: alis_build_build_pb.GetBuildSpecRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: alis_build_build_pb.BuildSpec) => void
  ): grpcWeb.ClientReadableStream<alis_build_build_pb.BuildSpec>;

  listBuildSpecs(
    request: alis_build_build_pb.ListBuildSpecsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: alis_build_build_pb.ListBuildSpecsResponse) => void
  ): grpcWeb.ClientReadableStream<alis_build_build_pb.ListBuildSpecsResponse>;

}

export class BuildServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  retrieveMyWorkstation(
    request: alis_build_build_pb.RetrieveMyWorkstationRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_longrunning_operations_pb.Operation>;

  getWorkstationOperation(
    request: google_longrunning_operations_pb.GetOperationRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_longrunning_operations_pb.Operation>;

  getBuildSpec(
    request: alis_build_build_pb.GetBuildSpecRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<alis_build_build_pb.BuildSpec>;

  listBuildSpecs(
    request: alis_build_build_pb.ListBuildSpecsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<alis_build_build_pb.ListBuildSpecsResponse>;

}
