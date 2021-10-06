// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import {CombinerType} from './combiner-type';


export class EmbeddingLookupSparseOptions {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i: number, bb: flatbuffers.ByteBuffer): EmbeddingLookupSparseOptions {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }

  static getRootAsEmbeddingLookupSparseOptions(
      bb: flatbuffers.ByteBuffer,
      obj?: EmbeddingLookupSparseOptions): EmbeddingLookupSparseOptions {
    return (obj || new EmbeddingLookupSparseOptions())
        .__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }

  static getSizePrefixedRootAsEmbeddingLookupSparseOptions(
      bb: flatbuffers.ByteBuffer,
      obj?: EmbeddingLookupSparseOptions): EmbeddingLookupSparseOptions {
    bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
    return (obj || new EmbeddingLookupSparseOptions())
        .__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }

  combiner(): CombinerType {
    const offset = this.bb!.__offset(this.bb_pos, 4);
    return offset ? this.bb!.readInt8(this.bb_pos + offset) : CombinerType.SUM;
  }

  static startEmbeddingLookupSparseOptions(builder: flatbuffers.Builder) {
    builder.startObject(1);
  }

  static addCombiner(builder: flatbuffers.Builder, combiner: CombinerType) {
    builder.addFieldInt8(0, combiner, CombinerType.SUM);
  }

  static endEmbeddingLookupSparseOptions(builder: flatbuffers.Builder): flatbuffers.Offset {
    const offset = builder.endObject();
    return offset;
  }

  static createEmbeddingLookupSparseOptions(builder: flatbuffers.Builder, combiner: CombinerType):
      flatbuffers.Offset {
    EmbeddingLookupSparseOptions.startEmbeddingLookupSparseOptions(builder);
    EmbeddingLookupSparseOptions.addCombiner(builder, combiner);
    return EmbeddingLookupSparseOptions.endEmbeddingLookupSparseOptions(builder);
  }
}
