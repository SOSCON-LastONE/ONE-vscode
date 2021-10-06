// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

export class Int32Vector {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i: number, bb: flatbuffers.ByteBuffer): Int32Vector {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }

  static getRootAsInt32Vector(bb: flatbuffers.ByteBuffer, obj?: Int32Vector): Int32Vector {
    return (obj || new Int32Vector()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }

  static getSizePrefixedRootAsInt32Vector(bb: flatbuffers.ByteBuffer, obj?: Int32Vector):
      Int32Vector {
    bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
    return (obj || new Int32Vector()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }

  values(index: number): number|null {
    const offset = this.bb!.__offset(this.bb_pos, 4);
    return offset ? this.bb!.readInt32(this.bb!.__vector(this.bb_pos + offset) + index * 4) : 0;
  }

  valuesLength(): number {
    const offset = this.bb!.__offset(this.bb_pos, 4);
    return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
  }

  valuesArray(): Int32Array|null {
    const offset = this.bb!.__offset(this.bb_pos, 4);
    return offset ? new Int32Array(
                        this.bb!.bytes().buffer,
                        this.bb!.bytes().byteOffset + this.bb!.__vector(this.bb_pos + offset),
                        this.bb!.__vector_len(this.bb_pos + offset)) :
                    null;
  }

  static startInt32Vector(builder: flatbuffers.Builder) {
    builder.startObject(1);
  }

  static addValues(builder: flatbuffers.Builder, valuesOffset: flatbuffers.Offset) {
    builder.addFieldOffset(0, valuesOffset, 0);
  }

  static createValuesVector(builder: flatbuffers.Builder, data: number[]|Int32Array):
      flatbuffers.Offset;
  /**
   * @deprecated This Uint8Array overload will be removed in the future.
   */
  static createValuesVector(builder: flatbuffers.Builder, data: number[]|Uint8Array):
      flatbuffers.Offset;
  static createValuesVector(builder: flatbuffers.Builder, data: number[]|Int32Array|Uint8Array):
      flatbuffers.Offset {
    builder.startVector(4, data.length, 4);
    for (let i = data.length - 1; i >= 0; i--) {
      builder.addInt32(data[i]!);
    }
    return builder.endVector();
  }

  static startValuesVector(builder: flatbuffers.Builder, numElems: number) {
    builder.startVector(4, numElems, 4);
  }

  static endInt32Vector(builder: flatbuffers.Builder): flatbuffers.Offset {
    const offset = builder.endObject();
    return offset;
  }

  static createInt32Vector(builder: flatbuffers.Builder, valuesOffset: flatbuffers.Offset):
      flatbuffers.Offset {
    Int32Vector.startInt32Vector(builder);
    Int32Vector.addValues(builder, valuesOffset);
    return Int32Vector.endInt32Vector(builder);
  }
}
