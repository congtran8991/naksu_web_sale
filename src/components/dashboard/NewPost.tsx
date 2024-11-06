"use client";
const NewPost: React.FC = () => {
  return (
    <div className="container-custom">
      <div>Bai Viet Moi Nhat</div>
      <div>
        Blog tập hợp những bản tin, bài viết về kinh nghiệm mua sắm, chăm sóc bé
        và chia sẻ các cung bậc cảm xúc hằng ngày. Tập hợp những mẹo vặt để cải
        thiện của sống của bạn tốt hơn, hoàn hảo hơn.
      </div>
      <div>
        <div className="flex flex-col md:flex-row">
          <div className="bg-blue-200 p-4 md:flex-[5]">Phần 1 (3 phần)</div>

          <div className="bg-green-200 p-4 md:flex-[5]">Phần 2 (5 phần)</div>
          <div className="bg-red-200 p-4 md:flex-[5]">Phần 2 (5 phần)</div>
        </div>
      </div>
    </div>
  );
};

export default NewPost;
