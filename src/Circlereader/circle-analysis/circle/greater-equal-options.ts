// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

export class GreaterEqualOptions {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i: number, bb: flatbuffers.ByteBuffer): GreaterEqualOptions {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }

  static getRootAsGreaterEqualOptions(bb: flatbuffers.ByteBuffer, obj?: GreaterEqualOptions):
      GreaterEqualOptions {
    return (obj || new GreaterEqualOptions())
        .__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }

  static getSizePrefixedRootAsGreaterEqualOptions(
      bb: flatbuffers.ByteBuffer, obj?: GreaterEqualOptions): GreaterEqualOptions {
    bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
    return (obj || new GreaterEqualOptions())
        .__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }

  static startGreaterEqualOptions(builder: flatbuffers.Builder) {
    builder.startObject(0);
  }

  static endGreaterEqualOptions(builder: flatbuffers.Builder): flatbuffers.Offset {
    const offset = builder.endObject();
    return offset;
  }

  static createGreaterEqualOptions(builder: flatbuffers.Builder): flatbuffers.Offset {
    GreaterEqualOptions.startGreaterEqualOptions(builder);
    return GreaterEqualOptions.endGreaterEqualOptions(builder);
  }
}
