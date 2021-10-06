// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import {DimensionType} from '../circle/dimension-type';
import {SparseIndexVector, unionListToSparseIndexVector, unionToSparseIndexVector} from '../circle/sparse-index-vector';


export class DimensionMetadata {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i: number, bb: flatbuffers.ByteBuffer): DimensionMetadata {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }

  static getRootAsDimensionMetadata(bb: flatbuffers.ByteBuffer, obj?: DimensionMetadata):
      DimensionMetadata {
    return (obj || new DimensionMetadata()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }

  static getSizePrefixedRootAsDimensionMetadata(
      bb: flatbuffers.ByteBuffer, obj?: DimensionMetadata): DimensionMetadata {
    bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
    return (obj || new DimensionMetadata()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }

  format(): DimensionType {
    const offset = this.bb!.__offset(this.bb_pos, 4);
    return offset ? this.bb!.readInt8(this.bb_pos + offset) : DimensionType.DENSE;
  }

  denseSize(): number {
    const offset = this.bb!.__offset(this.bb_pos, 6);
    return offset ? this.bb!.readInt32(this.bb_pos + offset) : 0;
  }

  arraySegmentsType(): SparseIndexVector {
    const offset = this.bb!.__offset(this.bb_pos, 8);
    return offset ? this.bb!.readUint8(this.bb_pos + offset) : SparseIndexVector.NONE;
  }

  arraySegments<T extends flatbuffers.Table>(obj: any): any|null {
    const offset = this.bb!.__offset(this.bb_pos, 10);
    return offset ? this.bb!.__union(obj, this.bb_pos + offset) : null;
  }

  arrayIndicesType(): SparseIndexVector {
    const offset = this.bb!.__offset(this.bb_pos, 12);
    return offset ? this.bb!.readUint8(this.bb_pos + offset) : SparseIndexVector.NONE;
  }

  arrayIndices<T extends flatbuffers.Table>(obj: any): any|null {
    const offset = this.bb!.__offset(this.bb_pos, 14);
    return offset ? this.bb!.__union(obj, this.bb_pos + offset) : null;
  }

  static startDimensionMetadata(builder: flatbuffers.Builder) {
    builder.startObject(6);
  }

  static addFormat(builder: flatbuffers.Builder, format: DimensionType) {
    builder.addFieldInt8(0, format, DimensionType.DENSE);
  }

  static addDenseSize(builder: flatbuffers.Builder, denseSize: number) {
    builder.addFieldInt32(1, denseSize, 0);
  }

  static addArraySegmentsType(builder: flatbuffers.Builder, arraySegmentsType: SparseIndexVector) {
    builder.addFieldInt8(2, arraySegmentsType, SparseIndexVector.NONE);
  }

  static addArraySegments(builder: flatbuffers.Builder, arraySegmentsOffset: flatbuffers.Offset) {
    builder.addFieldOffset(3, arraySegmentsOffset, 0);
  }

  static addArrayIndicesType(builder: flatbuffers.Builder, arrayIndicesType: SparseIndexVector) {
    builder.addFieldInt8(4, arrayIndicesType, SparseIndexVector.NONE);
  }

  static addArrayIndices(builder: flatbuffers.Builder, arrayIndicesOffset: flatbuffers.Offset) {
    builder.addFieldOffset(5, arrayIndicesOffset, 0);
  }

  static endDimensionMetadata(builder: flatbuffers.Builder): flatbuffers.Offset {
    const offset = builder.endObject();
    return offset;
  }

  static createDimensionMetadata(
      builder: flatbuffers.Builder, format: DimensionType, denseSize: number,
      arraySegmentsType: SparseIndexVector, arraySegmentsOffset: flatbuffers.Offset,
      arrayIndicesType: SparseIndexVector,
      arrayIndicesOffset: flatbuffers.Offset): flatbuffers.Offset {
    DimensionMetadata.startDimensionMetadata(builder);
    DimensionMetadata.addFormat(builder, format);
    DimensionMetadata.addDenseSize(builder, denseSize);
    DimensionMetadata.addArraySegmentsType(builder, arraySegmentsType);
    DimensionMetadata.addArraySegments(builder, arraySegmentsOffset);
    DimensionMetadata.addArrayIndicesType(builder, arrayIndicesType);
    DimensionMetadata.addArrayIndices(builder, arrayIndicesOffset);
    return DimensionMetadata.endDimensionMetadata(builder);
  }
}
