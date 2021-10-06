// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import {ActivationFunctionType} from '../circle/activation-function-type';


export class RNNOptions {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i: number, bb: flatbuffers.ByteBuffer): RNNOptions {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }

  static getRootAsRNNOptions(bb: flatbuffers.ByteBuffer, obj?: RNNOptions): RNNOptions {
    return (obj || new RNNOptions()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }

  static getSizePrefixedRootAsRNNOptions(bb: flatbuffers.ByteBuffer, obj?: RNNOptions): RNNOptions {
    bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
    return (obj || new RNNOptions()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }

  fusedActivationFunction(): ActivationFunctionType {
    const offset = this.bb!.__offset(this.bb_pos, 4);
    return offset ? this.bb!.readInt8(this.bb_pos + offset) : ActivationFunctionType.NONE;
  }

  asymmetricQuantizeInputs(): boolean {
    const offset = this.bb!.__offset(this.bb_pos, 6);
    return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : false;
  }

  static startRNNOptions(builder: flatbuffers.Builder) {
    builder.startObject(2);
  }

  static addFusedActivationFunction(
      builder: flatbuffers.Builder, fusedActivationFunction: ActivationFunctionType) {
    builder.addFieldInt8(0, fusedActivationFunction, ActivationFunctionType.NONE);
  }

  static addAsymmetricQuantizeInputs(
      builder: flatbuffers.Builder, asymmetricQuantizeInputs: boolean) {
    builder.addFieldInt8(1, +asymmetricQuantizeInputs, +false);
  }

  static endRNNOptions(builder: flatbuffers.Builder): flatbuffers.Offset {
    const offset = builder.endObject();
    return offset;
  }

  static createRNNOptions(
      builder: flatbuffers.Builder, fusedActivationFunction: ActivationFunctionType,
      asymmetricQuantizeInputs: boolean): flatbuffers.Offset {
    RNNOptions.startRNNOptions(builder);
    RNNOptions.addFusedActivationFunction(builder, fusedActivationFunction);
    RNNOptions.addAsymmetricQuantizeInputs(builder, asymmetricQuantizeInputs);
    return RNNOptions.endRNNOptions(builder);
  }
}
