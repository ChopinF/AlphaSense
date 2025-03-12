import OCRComponent from "@/components/OCRComponent";

export default function ExtractHangul() {
  return (
    <div>
      <OCRComponent language="Japanese" title="Japanese text (hiragana, katakana)" />
    </div>
  );
}
