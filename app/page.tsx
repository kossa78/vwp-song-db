import { useMemo, useState } from "react";

export default function VWPSongIndex() {
  const songs = [
    {
      title: "魔女(真)",
      furigana: "まじょ とぅるー",
      category: "系譜曲",
      members: ["花譜", "理芽", "春猿火", "ヰ世界情緒", "幸祜"],
      youtubeUrl: "https://www.youtube.com/results?search_query=V.W.P+魔女+真",
    },
    {
      title: "電脳",
      furigana: "でんのう",
      category: "系譜曲",
      members: ["花譜", "理芽", "春猿火", "ヰ世界情緒", "幸祜"],
      youtubeUrl: "https://www.youtube.com/results?search_query=V.W.P+電脳",
    },
    {
      title: "輪廻",
      furigana: "りんね",
      category: "系譜曲",
      members: ["花譜", "理芽", "春猿火", "ヰ世界情緒", "幸祜"],
      youtubeUrl: "https://www.youtube.com/results?search_query=V.W.P+輪廻",
    },
    {
      title: "変身",
      furigana: "へんしん",
      category: "系譜曲",
      members: ["花譜", "理芽", "春猿火", "ヰ世界情緒", "幸祜"],
      youtubeUrl: "https://www.youtube.com/results?search_query=V.W.P+変身",
    },
    {
      title: "言霊",
      furigana: "ことだま",
      category: "系譜曲",
      members: ["花譜", "理芽", "春猿火", "ヰ世界情緒", "幸祜"],
      youtubeUrl: "https://www.youtube.com/results?search_query=V.W.P+言霊",
    },
    {
      title: "共鳴",
      furigana: "きょうめい",
      category: "系譜曲",
      members: ["花譜", "理芽", "春猿火", "ヰ世界情緒", "幸祜"],
      youtubeUrl: "https://www.youtube.com/results?search_query=V.W.P+共鳴",
    },
    {
      title: "輪廻 acoustic ver.",
      furigana: "りんね あこーすてぃっく ばーじょん",
      category: "系譜曲",
      members: ["花譜", "理芽", "春猿火", "ヰ世界情緒", "幸祜"],
      youtubeUrl: "https://www.youtube.com/results?search_query=V.W.P+輪廻+acoustic",
    },
    {
      title: "再会",
      furigana: "さいかい",
      category: "系譜曲",
      members: ["花譜", "理芽", "春猿火", "ヰ世界情緒", "幸祜"],
      youtubeUrl: "https://www.youtube.com/results?search_query=V.W.P+再会",
    },
    {
      title: "定命",
      furigana: "じょうみょう",
      category: "系譜曲",
      members: ["花譜", "理芽", "春猿火", "ヰ世界情緒", "幸祜"],
      youtubeUrl: "https://www.youtube.com/results?search_query=V.W.P+定命",
    },
    {
      title: "玩具",
      furigana: "がんぐ",
      category: "系譜曲",
      members: ["花譜", "理芽", "春猿火", "ヰ世界情緒", "幸祜"],
      youtubeUrl: "https://www.youtube.com/results?search_query=V.W.P+玩具",
    },
    {
      title: "祭壇",
      furigana: "さいだん",
      category: "系譜曲",
      members: ["花譜", "理芽", "春猿火", "ヰ世界情緒", "幸祜"],
      youtubeUrl: "https://www.youtube.com/results?search_query=V.W.P+祭壇",
    },
    {
      title: "飛翔",
      furigana: "ひしょう",
      category: "拡声曲",
      members: ["花譜", "理芽", "春猿火", "ヰ世界情緒", "幸祜"],
      youtubeUrl: "https://www.youtube.com/results?search_query=V.W.P+飛翔",
    },
    {
      title: "秘密",
      furigana: "ひみつ",
      category: "拡声曲",
      members: ["花譜", "理芽", "春猿火", "ヰ世界情緒", "幸祜"],
      youtubeUrl: "https://www.youtube.com/results?search_query=V.W.P+秘密",
    },
    {
      title: "感情",
      furigana: "かんじょう",
      category: "拡声曲",
      members: ["花譜", "理芽", "春猿火", "ヰ世界情緒", "幸祜"],
      youtubeUrl: "https://www.youtube.com/results?search_query=V.W.P+感情",
    },
    {
      title: "切札",
      furigana: "きりふだ",
      category: "拡声曲",
      members: ["花譜", "理芽", "春猿火", "ヰ世界情緒", "幸祜"],
      youtubeUrl: "https://www.youtube.com/results?search_query=V.W.P+切札",
    },
    {
      title: "同盟",
      furigana: "どうめい",
      category: "拡声曲",
      members: ["花譜", "理芽", "春猿火", "ヰ世界情緒", "幸祜"],
      youtubeUrl: "https://www.youtube.com/results?search_query=V.W.P+同盟",
    },
    {
      title: "花束",
      furigana: "はなたば",
      category: "拡声曲",
      members: ["花譜", "理芽", "春猿火", "ヰ世界情緒", "幸祜"],
      youtubeUrl: "https://www.youtube.com/results?search_query=V.W.P+花束",
    },
    {
      title: "未遂",
      furigana: "みすい",
      category: "拡声曲",
      members: ["花譜", "理芽", "春猿火", "ヰ世界情緒", "幸祜"],
      youtubeUrl: "https://www.youtube.com/results?search_query=V.W.P+未遂",
    },
    {
      title: "強気",
      furigana: "つよき",
      category: "拡声曲",
      members: ["花譜", "理芽", "春猿火", "ヰ世界情緒", "幸祜"],
      youtubeUrl: "https://www.youtube.com/results?search_query=V.W.P+強気",
    },
    {
      title: "暁光",
      furigana: "ぎょうこう",
      category: "拡声曲",
      members: ["花譜", "理芽", "春猿火", "ヰ世界情緒", "幸祜"],
      youtubeUrl: "https://www.youtube.com/results?search_query=V.W.P+暁光",
    },
    {
      title: "まほう feat. 理芽",
      furigana: "まほう ふぃーちゃりんぐ りめ",
      category: "派生曲",
      members: ["花譜", "理芽"],
      youtubeUrl: "https://www.youtube.com/results?search_query=V.W.P+まほう+理芽",
    },
    {
      title: "深淵",
      furigana: "しんえん",
      category: "派生曲",
      members: ["花譜", "ヰ世界情緒"],
      youtubeUrl: "https://www.youtube.com/results?search_query=V.W.P+深淵",
    },
    {
      title: "刻印",
      furigana: "こくいん",
      category: "派生曲",
      members: ["ヰ世界情緒", "幸祜"],
      youtubeUrl: "https://www.youtube.com/results?search_query=V.W.P+刻印",
    },
    {
      title: "牢獄",
      furigana: "ろうごく",
      category: "派生曲",
      members: ["春猿火", "ヰ世界情緒"],
      youtubeUrl: "https://www.youtube.com/results?search_query=V.W.P+牢獄",
    },
    {
      title: "泡沫",
      furigana: "うたかた",
      category: "派生曲",
      members: ["理芽", "ヰ世界情緒"],
      youtubeUrl: "https://www.youtube.com/results?search_query=V.W.P+泡沫",
    },
    {
      title: "古傷",
      furigana: "ふるきず",
      category: "派生曲",
      members: ["春猿火", "幸祜"],
      youtubeUrl: "https://www.youtube.com/results?search_query=V.W.P+古傷",
    },
    {
      title: "残火",
      furigana: "ざんか",
      category: "派生曲",
      members: ["花譜", "春猿火"],
      youtubeUrl: "https://www.youtube.com/results?search_query=V.W.P+残火",
    },
  ];

  const groups = [
    "すべて",
    "V.W.P",
    "花譜",
    "理芽",
    "春猿火",
    "ヰ世界情緒",
    "幸祜",
  ];

  const [selectedGroup, setSelectedGroup] = useState("すべて");
  const [searchText, setSearchText] = useState("");

  const filteredSongs = useMemo(() => {
    const expandedSongs = [
      ...songs,
      {
        title: "過去を喰らう",
        furigana: "かこをくらう",
        category: "花譜 ソロ",
        members: ["花譜"],
        youtubeUrl: "https://www.youtube.com/results?search_query=花譜+過去を喰らう",
      },
      {
        title: "食虫植物",
        furigana: "しょくちゅうしょくぶつ",
        category: "理芽 ソロ",
        members: ["理芽"],
        youtubeUrl: "https://www.youtube.com/results?search_query=理芽+食虫植物",
      },
      {
        title: "Oarana",
        furigana: "おあらな",
        category: "春猿火 ソロ",
        members: ["春猿火"],
        youtubeUrl: "https://www.youtube.com/results?search_query=春猿火+Oarana",
      },
      {
        title: "シリウスの心臓",
        furigana: "しりうすのしんぞう",
        category: "ヰ世界情緒 ソロ",
        members: ["ヰ世界情緒"],
        youtubeUrl: "https://www.youtube.com/results?search_query=ヰ世界情緒+シリウスの心臓",
      },
      {
        title: "the last bullet",
        furigana: "ざ らすと ばれっと",
        category: "幸祜 ソロ",
        members: ["幸祜"],
        youtubeUrl: "https://www.youtube.com/results?search_query=幸祜+the+last+bullet",
      },
    ];

    return expandedSongs.filter((song) => {
      const memberMatch =
        selectedGroup === "すべて" ||
        song.members.includes(selectedGroup) ||
        (selectedGroup === "V.W.P" && song.members.length >= 2);

      const search = searchText.toLowerCase();

      const textMatch =
        song.title.toLowerCase().includes(search) ||
        song.furigana.toLowerCase().includes(search);

      return memberMatch && textMatch;
    });
  }, [selectedGroup, searchText]);

  return (
    <div className="min-h-screen bg-zinc-950 text-white p-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-3 break-words">V.W.P 楽曲一覧</h1>
          <p className="text-zinc-400 text-lg">
            V.W.P・派生曲・各メンバーソロ曲を、ふりがな・歌唱メンバー・YouTubeリンク付きでまとめた非公式KAMITSUBAKI楽曲データベース。
          </p>
        </div>

        <div className="mb-6">
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="曲名・ふりがな検索"
            className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl px-5 py-4 text-white placeholder:text-zinc-500 outline-none focus:border-purple-500"
          />
        </div>

        <div className="flex flex-wrap gap-3 mb-8">
          {groups.map((member) => (
            <button
              key={member}
              onClick={() => setSelectedGroup(member)}
              className={`px-4 py-2 rounded-2xl transition font-semibold ${
                selectedGroup === member
                  ? "bg-purple-500 text-white"
                  : "bg-zinc-900 text-zinc-300 hover:bg-zinc-800"
              }`}
            >
              {member}
            </button>
          ))}
        </div>

        <div className="grid gap-4">
          {filteredSongs.map((song) => (
            <div
              key={`${song.title}-${song.furigana}`}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-5"
            >
              <div className="flex gap-4 items-start">
                <div className="w-24 h-24 rounded-2xl bg-zinc-800 flex items-center justify-center text-3xl font-bold text-zinc-500">
                  ♪
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h2 className="text-3xl font-bold">{song.title}</h2>

                    <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full">
                      {song.category}
                    </span>
                  </div>

                  <p className="text-zinc-400 text-lg mb-3">
                    {song.furigana}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {song.members.map((member) => (
                      <span
                        key={member}
                        className="text-xs bg-zinc-800 text-zinc-300 px-2 py-1 rounded-full"
                      >
                        {member}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <button
                onClick={() => {
                  window.location.href = encodeURI(song.youtubeUrl);
                }}
                className="bg-white text-black font-semibold px-5 py-3 rounded-2xl transition inline-flex items-center justify-center shrink-0 hover:bg-zinc-200"
              >
                YouTubeで開く
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
