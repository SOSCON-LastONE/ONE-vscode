// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import {Buffer} from '../circle/buffer';
import {Metadata} from '../circle/metadata';
import {OperatorCode} from '../circle/operator-code';
import {SubGraph} from '../circle/sub-graph';


export class Model {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i: number, bb: flatbuffers.ByteBuffer): Model {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }

  static getRootAsModel(bb: flatbuffers.ByteBuffer, obj?: Model): Model {
    return (obj || new Model()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }

  static getSizePrefixedRootAsModel(bb: flatbuffers.ByteBuffer, obj?: Model): Model {
    bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
    return (obj || new Model()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }

  static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean {
    return bb.__has_identifier('CIR0');
  }

  version(): number {
    const offset = this.bb!.__offset(this.bb_pos, 4);
    return offset ? this.bb!.readUint32(this.bb_pos + offset) : 0;
  }

  operatorCodes(index: number, obj?: OperatorCode): OperatorCode|null {
    const offset = this.bb!.__offset(this.bb_pos, 6);
    return offset ?
        (obj || new OperatorCode())
            .__init(
                this.bb!.__indirect(this.bb!.__vector(this.bb_pos + offset) + index * 4), this.bb!
                ) :
        null;
  }

  operatorCodesLength(): number {
    const offset = this.bb!.__offset(this.bb_pos, 6);
    return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
  }

  subgraphs(index: number, obj?: SubGraph): SubGraph|null {
    const offset = this.bb!.__offset(this.bb_pos, 8);
    return offset ?
        (obj || new SubGraph())
            .__init(
                this.bb!.__indirect(this.bb!.__vector(this.bb_pos + offset) + index * 4), this.bb!
                ) :
        null;
  }

  subgraphsLength(): number {
    const offset = this.bb!.__offset(this.bb_pos, 8);
    return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
  }

  description(): string|null
  description(optionalEncoding: flatbuffers.Encoding): string|Uint8Array|null
  description(optionalEncoding?: any): string|Uint8Array|null {
    const offset = this.bb!.__offset(this.bb_pos, 10);
    return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
  }

  buffers(index: number, obj?: Buffer): Buffer|null {
    const offset = this.bb!.__offset(this.bb_pos, 12);
    return offset ?
        (obj || new Buffer())
            .__init(
                this.bb!.__indirect(this.bb!.__vector(this.bb_pos + offset) + index * 4), this.bb!
                ) :
        null;
  }

  buffersLength(): number {
    const offset = this.bb!.__offset(this.bb_pos, 12);
    return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
  }

  metadataBuffer(index: number): number|null {
    const offset = this.bb!.__offset(this.bb_pos, 14);
    return offset ? this.bb!.readInt32(this.bb!.__vector(this.bb_pos + offset) + index * 4) : 0;
  }

  metadataBufferLength(): number {
    const offset = this.bb!.__offset(this.bb_pos, 14);
    return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
  }

  metadataBufferArray(): Int32Array|null {
    const offset = this.bb!.__offset(this.bb_pos, 14);
    return offset ? new Int32Array(
                        this.bb!.bytes().buffer,
                        this.bb!.bytes().byteOffset + this.bb!.__vector(this.bb_pos + offset),
                        this.bb!.__vector_len(this.bb_pos + offset)) :
                    null;
  }

  metadata(index: number, obj?: Metadata): Metadata|null {
    const offset = this.bb!.__offset(this.bb_pos, 16);
    return offset ?
        (obj || new Metadata())
            .__init(
                this.bb!.__indirect(this.bb!.__vector(this.bb_pos + offset) + index * 4), this.bb!
                ) :
        null;
  }

  metadataLength(): number {
    const offset = this.bb!.__offset(this.bb_pos, 16);
    return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
  }

  static startModel(builder: flatbuffers.Builder) {
    builder.startObject(7);
  }

  static addVersion(builder: flatbuffers.Builder, version: number) {
    builder.addFieldInt32(0, version, 0);
  }

  static addOperatorCodes(builder: flatbuffers.Builder, operatorCodesOffset: flatbuffers.Offset) {
    builder.addFieldOffset(1, operatorCodesOffset, 0);
  }

  static createOperatorCodesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]):
      flatbuffers.Offset {
    builder.startVector(4, data.length, 4);
    for (let i = data.length - 1; i >= 0; i--) {
      builder.addOffset(data[i]!);
    }
    return builder.endVector();
  }

  static startOperatorCodesVector(builder: flatbuffers.Builder, numElems: number) {
    builder.startVector(4, numElems, 4);
  }

  static addSubgraphs(builder: flatbuffers.Builder, subgraphsOffset: flatbuffers.Offset) {
    builder.addFieldOffset(2, subgraphsOffset, 0);
  }

  static createSubgraphsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]):
      flatbuffers.Offset {
    builder.startVector(4, data.length, 4);
    for (let i = data.length - 1; i >= 0; i--) {
      builder.addOffset(data[i]!);
    }
    return builder.endVector();
  }

  static startSubgraphsVector(builder: flatbuffers.Builder, numElems: number) {
    builder.startVector(4, numElems, 4);
  }

  static addDescription(builder: flatbuffers.Builder, descriptionOffset: flatbuffers.Offset) {
    builder.addFieldOffset(3, descriptionOffset, 0);
  }

  static addBuffers(builder: flatbuffers.Builder, buffersOffset: flatbuffers.Offset) {
    builder.addFieldOffset(4, buffersOffset, 0);
  }

  static createBuffersVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]):
      flatbuffers.Offset {
    builder.startVector(4, data.length, 4);
    for (let i = data.length - 1; i >= 0; i--) {
      builder.addOffset(data[i]!);
    }
    return builder.endVector();
  }

  static startBuffersVector(builder: flatbuffers.Builder, numElems: number) {
    builder.startVector(4, numElems, 4);
  }

  static addMetadataBuffer(builder: flatbuffers.Builder, metadataBufferOffset: flatbuffers.Offset) {
    builder.addFieldOffset(5, metadataBufferOffset, 0);
  }

  static createMetadataBufferVector(builder: flatbuffers.Builder, data: number[]|Int32Array):
      flatbuffers.Offset;
  /**
   * @deprecated This Uint8Array overload will be removed in the future.
   */
  static createMetadataBufferVector(builder: flatbuffers.Builder, data: number[]|Uint8Array):
      flatbuffers.Offset;
  static createMetadataBufferVector(
      builder: flatbuffers.Builder, data: number[]|Int32Array|Uint8Array): flatbuffers.Offset {
    builder.startVector(4, data.length, 4);
    for (let i = data.length - 1; i >= 0; i--) {
      builder.addInt32(data[i]!);
    }
    return builder.endVector();
  }

  static startMetadataBufferVector(builder: flatbuffers.Builder, numElems: number) {
    builder.startVector(4, numElems, 4);
  }

  static addMetadata(builder: flatbuffers.Builder, metadataOffset: flatbuffers.Offset) {
    builder.addFieldOffset(6, metadataOffset, 0);
  }

  static createMetadataVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]):
      flatbuffers.Offset {
    builder.startVector(4, data.length, 4);
    for (let i = data.length - 1; i >= 0; i--) {
      builder.addOffset(data[i]!);
    }
    return builder.endVector();
  }

  static startMetadataVector(builder: flatbuffers.Builder, numElems: number) {
    builder.startVector(4, numElems, 4);
  }

  static endModel(builder: flatbuffers.Builder): flatbuffers.Offset {
    const offset = builder.endObject();
    return offset;
  }

  static finishModelBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset) {
    builder.finish(offset, 'CIR0');
  }

  static finishSizePrefixedModelBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset) {
    builder.finish(offset, 'CIR0', true);
  }

  static createModel(
      builder: flatbuffers.Builder, version: number, operatorCodesOffset: flatbuffers.Offset,
      subgraphsOffset: flatbuffers.Offset, descriptionOffset: flatbuffers.Offset,
      buffersOffset: flatbuffers.Offset, metadataBufferOffset: flatbuffers.Offset,
      metadataOffset: flatbuffers.Offset): flatbuffers.Offset {
    Model.startModel(builder);
    Model.addVersion(builder, version);
    Model.addOperatorCodes(builder, operatorCodesOffset);
    Model.addSubgraphs(builder, subgraphsOffset);
    Model.addDescription(builder, descriptionOffset);
    Model.addBuffers(builder, buffersOffset);
    Model.addMetadataBuffer(builder, metadataBufferOffset);
    Model.addMetadata(builder, metadataOffset);
    return Model.endModel(builder);
  }
}
